import * as S from './styles';
import { X } from 'phosphor-react';
import successImg from '../../assets/Success.png';

export function SubmittedForm() {
  return (
    <S.ContainerSubmittedForm>
      <X size={24} className="X" />
      <S.SuccessImage src={successImg} alt="" />
      <S.Title>Sua avaliação foi enviada com sucesso!</S.Title>
      <S.Subtitle>
        Esta avaliação ajuda a <br /> melhorarmos a sua experiência. <br />{' '}
        Muito obrigado pela sua participação.
      </S.Subtitle>
      <S.Button>Concluir</S.Button>
    </S.ContainerSubmittedForm>
  );
}
