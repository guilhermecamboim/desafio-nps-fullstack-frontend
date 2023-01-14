import styled from "styled-components";

export const ContainerSubmittedForm = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme["white-200"]};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

  .X {
    position: relative;
    left: 188px;
    top: 21px;
    cursor: pointer;
  }
`;

export const SuccessImage = styled.img`
  width: 55px;
  height: 55px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  width: 320.62px;
  height: 43.69px;
  margin-top: 23.5px;
  color: ${(props) => props.theme["black"]};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["black"]};
  width: 341.13px;
  height: 71.49px;
  line-height: 30px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.02em;
  margin-top: 23.5px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme["primaryGradient"]};
  width: 157.50px;
  height: 47.66px;
  margin-top: 39px;
  margin-bottom: 31px;

  border: none;
  border-radius: 2px;
  cursor: pointer;
  
  color: ${(props) => props.theme["white-200"]};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
`;
