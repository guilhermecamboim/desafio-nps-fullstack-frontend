import * as S from "./styles";
import * as Slider from "@radix-ui/react-slider";
import rangeImg from "../../assets/Range.png";
import { X } from "phosphor-react";

export function Challenge() {
  return (
    <S.ContainerChallenge>
      <X size={51} className="X" />
      <S.Title>Avaliação de satisfação</S.Title>
      <S.Subtitle>
        Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um
        amigo ou familiar?
      </S.Subtitle>
      <S.Form>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[60]}
          max={100}
          step={10}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" />
        </Slider.Root>
        <img src={rangeImg} alt="" />
        <S.TextArea placeholder="Deixe sua opnião e melhorias (opcional)" />
      </S.Form>
      <S.Required>* Obrigatório</S.Required>
      <S.Button>Próximo</S.Button>
    </S.ContainerChallenge>
  );
}
