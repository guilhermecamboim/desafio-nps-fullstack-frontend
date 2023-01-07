import * as S from "./styles";
import * as Slider from "@radix-ui/react-slider";
import rangeImg from "../../assets/Range.png";
import { X } from "phosphor-react";
import api from "../../services/api";
import { FormEvent, ReactElement, useEffect, useState } from "react";
import { SubmittedChallenge } from "../SubmittedChallenge";
import { useMultiStepForm } from "../../hooks/useMultistepForm";
import { FiredevForm } from "../../components/FiredevForm";
import { usePersistedState } from "../../hooks/usePersistedState";

type IFormData = {
  rangeSelected: undefined | number[];
  answerOfUser: string;
};

const defaultValue: IFormData = {
  rangeSelected: [0],
  answerOfUser: "",
};

const dataMock = [
  {
    question:
      "Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um amigo ou familiar?",
    required: true,
  },
  {
    question:
      " Em uma escala de 0 a 10, quanto você recomendaria o Portal do Desenvolvedor para um amigo ou familiar?",
    required: false,
  },
  {
    question:
      "Em uma escala de 0 a 10, quanto você recomendaria a consultoria Firedev para a sua empresa?",
    required: false,
  },
];

export function Challenge() {
  const [formData, setFormData] = useState(defaultValue);
  const [formDataByStep, setFormDataByStep] = useState<IFormData[]>([]);
  const [dataToMultiStepForm, setDataToMultiStepForm] = useState<
    ReactElement[]
  >([]);
  const { step, nextStep, isLastStep, isPenultimate, isFirstStep, currentStepIndex } =
    useMultiStepForm(dataToMultiStepForm);

  async function fetchData() {
    //const resultOfFetchData = await api.get('questions')
    //const dataToMultiStepForm = resultOfFetchData...
    const elementReactToMultiStepForm = dataMock.map((item) => {
      return <FiredevForm required={item.required} question={item.question} />;
    });

    setDataToMultiStepForm(
      elementReactToMultiStepForm.concat(<SubmittedChallenge />)
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  function updateFields(fields: Partial<IFormData>) {
    setFormData((prevData: IFormData) => {
      return { ...prevData, ...fields };
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isPenultimate) {
        setFormDataByStep((oldArray) => oldArray.concat(formData));
        setFormData(defaultValue);
        nextStep();
      }
      else {
        console.log(formDataByStep);
        nextStep();
      }
  }

  return (
    <S.ContainerChallenge>
      {!isLastStep && (
        <>
          <X size={22} className="X" />
          <S.Title>Avaliação de satisfação</S.Title>
        </>
      )}
      {step}
      {!isLastStep && (
        <form onSubmit={onSubmit}>
          <S.Form>
            <Slider.Root
              className="SliderRoot"
              defaultValue={undefined}
              value={formData.rangeSelected}
              max={100}
              step={10}
              onValueChange={(value) => updateFields({ rangeSelected: value })}
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
                  ? "Deixe sua opnião e melhorias."
                  : "Deixe sua opnião e melhorias (opcional)."
              }
              onChange={(event) =>
                updateFields({ answerOfUser: event.target.value })
              }
              value={formData.answerOfUser}
              required={isFirstStep ? true : false}
            />
            <S.ContainerButtonSubmit>
              <S.Button type="submit">
                {isPenultimate ? "Enviar" : "Próxima"}
              </S.Button>
            </S.ContainerButtonSubmit>
          </S.Form>
        </form>
      )}
    </S.ContainerChallenge>
  );
}
