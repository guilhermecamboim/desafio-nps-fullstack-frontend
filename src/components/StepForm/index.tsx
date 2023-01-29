import * as S from '../../pages/QuestionForm/styles';

type IFiredevData = {
  question: string;
};

export function StepForm({ question }: IFiredevData) {
  return <S.Subtitle>{question}</S.Subtitle>;
}
