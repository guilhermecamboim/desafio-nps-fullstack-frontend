import * as S from "./styles";
import { X } from "phosphor-react";
import successImg from "../../assets/Success.png";

export function SubmittedChallenge() {
  return (
    <S.ContainerSubmittedChallenge>
      <X size={51} className="X" />
      <S.SuccessImage src={successImg} alt="" />
      <S.Title>Sua avaliação foi enviada com sucesso!</S.Title>
      <S.Subtitle>
        Esta avaliação ajuda a melhorarmos a sua experiência. Muito obrigado
        pela sua participação.
      </S.Subtitle>
      <S.Button>Concluir</S.Button>
    </S.ContainerSubmittedChallenge>
  );
}
