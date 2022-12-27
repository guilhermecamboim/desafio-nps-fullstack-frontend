import * as S from '../../pages/Challenge/styles'
import * as Slider from "@radix-ui/react-slider";

import rangeImg from '../../assets/Range.png'

type IConsultancyData = {
  rangeConsultancy: undefined | number[];
  answerConsultancy: string;
};

type IConsultancyFormProps = IConsultancyData & {
  updateFields: (fields: Partial<IConsultancyData>) => void;
};

export function ConsultancyForm({rangeConsultancy, answerConsultancy, updateFields}: IConsultancyFormProps) {
  return (
    <>
      <S.Subtitle>
        Em uma escala de 0 a 10, quanto você <br /> recomendaria a consultoria
        Firedev para <br /> a sua empresa?
      </S.Subtitle>
      <S.Form>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[0]}
          value={rangeConsultancy}
          max={100}
          step={10}
          onValueChange={value => updateFields({ rangeConsultancy: value})}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" />
        </Slider.Root>
        <img src={rangeImg} alt="" />
        <S.TextArea placeholder="Deixe sua opnião e melhorias (opcional)" 
          onChange={(event) =>
            updateFields({ answerConsultancy: event.target.value })
          }
        />
      </S.Form>
    </>
  );
}
