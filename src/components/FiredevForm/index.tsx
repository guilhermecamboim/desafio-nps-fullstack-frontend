import * as S from "../../pages/Challenge/styles";
import * as Slider from "@radix-ui/react-slider";

import rangeImg from "../../assets/Range.png";

type IFiredevData = {
  rangeFiredev: undefined | number[];
  answerFiredev: string;
}

type IFiredevFormProps = IFiredevData & {
  updateFields: (fields: Partial<IFiredevData>) => void;
} 

export function FiredevForm({ rangeFiredev, answerFiredev, updateFields }: IFiredevFormProps) {
  return (
    <>
      <S.Subtitle>
        Em uma escala de 0 a 10, quanto você <br /> recomendaria a FireDev para
        um amigo <br /> ou familiar?
      </S.Subtitle>
      <S.Form>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[0]}
          value={rangeFiredev}
          max={100}
          step={10}
          onValueChange={value => updateFields({ rangeFiredev: value})}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" />
        </Slider.Root>
        <img src={rangeImg} alt="" />
        <S.TextArea
          placeholder="Deixe sua opnião e melhorias (opcional)"
          value={answerFiredev}
          onChange={event => updateFields({answerFiredev: event.target.value})}
        />
      </S.Form>
      <S.Required>* Obrigatório</S.Required>
    </>
  );
}
