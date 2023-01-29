import * as S from './styles';
import * as Slider from '@radix-ui/react-slider';
import rangeImg from '../../assets/Range.png';
import { X } from 'phosphor-react';
import api from '../../services/api';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { SubmittedForm } from '../SubmittedForm';
import { useMultiStepForm } from '../../hooks/useMultistepForm';
import { StepForm } from '../../components/StepForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IFormData = {
  rangeSelected: undefined | any;
  answerOfUser: string;
};

const defaultValue: IFormData = {
  rangeSelected: [0.1],
  answerOfUser: '',
};

const dataMock = [
  {
    question:
      'Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um amigo ou familiar?',
    required: true,
  },
  {
    question:
      ' Em uma escala de 0 a 10, quanto você recomendaria o Portal do Desenvolvedor para um amigo ou familiar?',
    required: false,
  },
  {
    question:
      'Em uma escala de 0 a 10, quanto você recomendaria a consultoria Firedev para a sua empresa?',
    required: false,
  },
];

export function QuestionForm() {
  const [formData, setFormData] = useState(defaultValue);
  const [formDataByStep, setFormDataByStep] = useState<IFormData[]>([]);
  const [dataToMultiStepForm, setDataToMultiStepForm] = useState<
    ReactElement[]
  >([]);
  const { step, nextStep, isLastStep, isPenultimate, isFirstStep } =
    useMultiStepForm(dataToMultiStepForm);

  function notifyUser() {
    toast.error('Avalie de 0 a 10!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  async function fetchData() {
    //const resultOfFetchData = await api.get('questions')
    //const dataToMultiStepForm = resultOfFetchData...
    const elementReactToMultiStepForm = dataMock.map(item => {
      return <StepForm question={item.question} />;
    });

    setDataToMultiStepForm(
      elementReactToMultiStepForm.concat(<SubmittedForm />)
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Resultado da avaliação:', formDataByStep);
  }, [isLastStep]);

  function updateFields(fields: Partial<IFormData>) {
    setFormData((prevData: IFormData) => {
      return { ...prevData, ...fields };
    });
  }

  function onNextStepOfNPSForm(event: FormEvent) {
    event.preventDefault();
    if (!isLastStep && formData.rangeSelected[0] !== 0.1) {
      setFormDataByStep(oldArray => oldArray.concat(formData));
      setFormData(defaultValue);
      nextStep();
    }

    if (formData.rangeSelected[0] === 0.1) {
      notifyUser();
    }
  }

  return (
    <S.ContainerChallenge isLastStep={isLastStep}>
      {!isLastStep && (
        <>
          <X size={22} className="X" />
          <S.Title>Avaliação de satisfação</S.Title>
        </>
      )}
      {step}
      {!isLastStep && (
        <form onSubmit={onNextStepOfNPSForm}>
          <S.Form>
            <Slider.Root
              className="SliderRoot"
              defaultValue={undefined}
              value={formData.rangeSelected}
              max={100}
              step={10}
              onValueChange={value => updateFields({ rangeSelected: value })}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" />
            </Slider.Root>
            <img src={rangeImg} alt="" />
            <S.TextArea
              placeholder={
                isFirstStep
                  ? 'Deixe sua opnião e melhorias.'
                  : 'Deixe sua opnião e melhorias (opcional).'
              }
              onChange={event =>
                updateFields({ answerOfUser: event.target.value })
              }
              value={formData.answerOfUser}
              maxLength={400}
              required={isFirstStep ? true : false}
            />
            {isFirstStep && <S.Required>* Obrigatório</S.Required>}
            <S.ContainerButtonSubmit>
              <S.Button
                type="submit"
                availableToNext={formData.rangeSelected[0] !== 0.1}
              >
                {isPenultimate ? 'Enviar' : 'Próxima'}
              </S.Button>
            </S.ContainerButtonSubmit>
          </S.Form>
        </form>
      )}
      <ToastContainer />
    </S.ContainerChallenge>
  );
}
