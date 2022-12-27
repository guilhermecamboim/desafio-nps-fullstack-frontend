import styled from "styled-components";

export const ContainerChallenge = styled.div`
  width: 472.5px;
  height: 524.76px;
  background: ${(props) => props.theme["white-100"]};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .X {
    position: relative;
    left: 180px;
    top: 10px;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  width: 320px;
  font-size: 27px;
  margin-top: 40px;
  color: ${(props) => props.theme["black"]};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["black"]};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 20px;

img {
  position: relative;
  z-index: 1;
  left: 9px;
  bottom: 15px;
  width: 400px;
}

.SliderRoot {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 352.12px;
  height: 7.25px;
  border-radius: 24.3417px;
  background: ${(props) => props.theme["gray-100"]};
}

.SliderTrack {
  background: ${(props) => props.theme["gray-100"]};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  cursor: pointer;
}
.SliderTrack[data-orientation='horizontal'] {
  height: 7.25px;
}

.SliderRange {
  position: absolute;
  background: ${(props) => props.theme["primaryGradient"]};
  border-radius: 9999px;
  height: 100%;
}

.SliderThumb {
  display: block;
  width: 25.3px;
  height: 13.72px;

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
  width: 365.63px;
  height: 88.67px;
  border-radius: 5.625px;

  position: relative;
  bottom: 25px;
  
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 15.75px;

  letter-spacing: -0.02em;
  color: ${(props) => props.theme["gray-300"]};
`;


export const Required = styled.p`
  color: ${(props) => props.theme["primaryPink"]};
  font-style: normal;
  font-weight: 400;
  font-size: 14.63px;
  text-align: center;
  letter-spacing: -0.02em;
  position: relative;
  right: 140px;
  top: 0px;
`;


export const Button = styled.button`
  background: ${(props) => props.disabled ? props.theme["gray-200"] : props.theme["primaryGradient"]};
  width: 157.50px;
  height: 43.71px;
  padding: 10.8571px 14.4762px;
  border-radius: 1.80952px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  
  color: ${(props) => props.theme["white-200"]};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const ContainerButtonSubmit = styled.div `
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`
