import * as S from "./styles";
import * as Slider from "@radix-ui/react-slider";
import rangeImg from "../../assets/Range.png";
import { X } from "phosphor-react";
import api from "../../services/api";
import { FormEvent, useEffect, useState } from "react";
import { SubmittedChallenge } from "../SubmittedChallenge";
import { useMultiStepForm } from "../../hooks/useMultistepForm";
import { FiredevForm } from "../../components/FiredevForm";
import { PortalForm } from "../../components/PortalForm";
import { ConsultancyForm } from "../../components/ConsultancyForm";

type IFormData = {
  rangeFiredev: undefined | number[];
  answerFiredev: string;
  rangePortal: undefined | number[];
  answerPortal?: string;
  rangeConsultancy: undefined | number[];
  answerConsultancy?: string;
};

const defaultValue: IFormData = {
  rangeFiredev: undefined,
  answerFiredev: "",
  rangePortal: undefined,
  answerPortal: "",
  rangeConsultancy: undefined,
  answerConsultancy: "",
};

export function Challenge() {
  const [data, setData] = useState(defaultValue);
  const { steps, step, currentStepIndex, nextStep, isLastStep, isPenultimate, goTo } =
    useMultiStepForm([
      <FiredevForm {...data} updateFields={updateFields} />,
      <PortalForm {...data} updateFields={updateFields} />,
      <ConsultancyForm {...data} updateFields={updateFields} />,
      <SubmittedChallenge />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prevData) => {
      return { ...prevData, ...fields };
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isPenultimate) nextStep();
    else {
      console.log(data);
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
      <form onSubmit={onSubmit}>
        {step}
        <S.ContainerButtonSubmit>
        {!isLastStep && (
            <S.Button
              type="submit"
            >
              {isPenultimate ? "Enviar" : "Próxima"}
            </S.Button>
        )}
        </S.ContainerButtonSubmit>
      </form>
    </S.ContainerChallenge>
  );
}
