import * as S from "../../pages/Challenge/styles";

type IFiredevData = {
  question: string;
  required: boolean;
}



export function FiredevForm({ question, required }: IFiredevData) {
  return (
    <>
      <S.Subtitle>
        {question}
      </S.Subtitle>
      <S.Required>{required ? '* Obrigatório' : ''}</S.Required>
    </>
  );
}
