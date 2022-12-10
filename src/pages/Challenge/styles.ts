import styled from "styled-components";

export const ContainerChallenge = styled.div`
  width: 889px;
  height: 1227.67px;
  background: ${(props) => props.theme["white-100"]};

  display: flex;
  align-items: center;
  flex-direction: column;

  .X {
    position: relative;
    left: 379px;
    top: 51px;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 50.8px;
  color: ${(props) => props.theme["black"]};
  margin-bottom: 55px;
  margin-top: 270.93px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["black"]};
  font-style: normal;
  font-weight: 300;
  font-size: 33.8667px;
  text-align: center;
  letter-spacing: -0.02em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 114px;
`;

export const Form = styled.form`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img {
  position: relative;
  z-index: 1;
  left: 20px;
  bottom: 34px;

}

.SliderRoot {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 662.52px;
  height: 16.93px;
  border-radius: 24.3417px;
  background: ${(props) => props.theme["gray-100"]};
}

.SliderTrack {
  background: ${(props) => props.theme["gray-100"]};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
}
.SliderTrack[data-orientation='horizontal'] {
  height: 16.93px;
}

.SliderRange {
  position: absolute;
  background: ${(props) => props.theme["primaryGradient"]};
  border-radius: 9999px;
  height: 100%;
}

.SliderThumb {
  display: block;
  width: 47.5px;
  height: 32.09px;

  background: ${(props) => props.theme["white-200"]};
  border: 2.11667px solid ${(props) => props.theme["gray-200"]};
  border-radius: 20.7376px;
  cursor: pointer;
}

`

export const TextArea = styled.textarea`
  display: flex;
  padding: 31.75px 0;
  background: ${(props) => props.theme["gray-100"]};
  resize: none;
  border: none;
  width: 687.92px;
  height: 207.43px;
  border-radius: 10.5833px;
  
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 29.6333px;

  letter-spacing: -0.02em;
  color: ${(props) => props.theme["gray-300"]};
  margin-top: 75.6px;
`;


export const Required = styled.p`
  color: ${(props) => props.theme["primaryPink"]};
  font-style: normal;
  font-weight: 400;
  font-size: 27.5167px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 67.73px;

  position: relative;
  right: 270px;
`;


export const Button = styled.button`
  background: ${(props) => props.theme["gray-200"]};
  width: 296.33px;
  height: 101.8px;
  border-radius: 4.23333px;
  cursor: pointer;
  border: none;
  
  color: ${(props) => props.theme["white-200"]};
  font-style: normal;
  font-weight: 600;
  font-size: 33.8667px;
  text-align: center;
  letter-spacing: -0.02em;
`;
