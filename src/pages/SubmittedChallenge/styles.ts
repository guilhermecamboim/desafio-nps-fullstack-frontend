import styled from "styled-components";

export const ContainerSubmittedChallenge = styled.div`
  width: 822.5px;
  height: 859.71px;
  background: ${(props) => props.theme["white-200"]};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .X {
    position: relative;
    left: 348px;
    top: 10px;
    cursor: pointer;
  }
`;

export const SuccessImage = styled.img`

`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 47px;
  width: 558.12px;
  height: 94.57px;
  color: ${(props) => props.theme["black"]};
  margin-top: 50.92px;
  margin-bottom: 50.95px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["black"]};
  width: 628.62px;
  height: 154.75px;
  font-style: normal;
  font-weight: 300;
  font-size: 31.3333px;
  letter-spacing: -0.02em;
  margin-bottom: 85.97px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme["primaryGradient"]};
  width: 274.17px;
  height: 103.17px;
  border: none;
  border-radius: 2px;
  margin-bottom: 90.27px;
  
  color: ${(props) => props.theme["white-200"]};
  font-style: normal;
  font-weight: 600;
  font-size: 33.8667px;
  text-align: center;
  letter-spacing: -0.02em;
`;
