import * as S from "../../pages/Challenge/styles";
import * as Slider from "@radix-ui/react-slider";

import rangeImg from "../../assets/Range.png";

type IPortalData = {
  rangePortal: undefined | number[];
  answerPortal: string;
};

type IPortalFormProps = IPortalData & {
  updateFields: (fields: Partial<IPortalData>) => void;
};

export function PortalForm({
  rangePortal,
  answerPortal,
  updateFields,
}: IPortalFormProps) {
  return (
    <>
      <S.Subtitle>
        Em uma escala de 0 a 10, quanto você <br />
        recomendaria o Portal do Desenvolvedor <br /> para um amigo ou familiar?
      </S.Subtitle>
      <S.Form>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[0]}
          value={rangePortal}
          max={100}
          step={10}
          onValueChange={(value) => updateFields({ rangePortal: value })}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" />
        </Slider.Root>
        <img src={rangeImg} alt="" />
        <S.TextArea
          placeholder="Deixe sua opnião e melhorias (opcional)"
          onChange={(event) =>
            updateFields({ answerPortal: event.target.value })
          }
        />
      </S.Form>
    </>
  );
}
