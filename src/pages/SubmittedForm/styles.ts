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

  @media (max-width: 428px) {
    .X {
      width: 19px;
      height: 19px;
      left: 138px;
    }
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

  @media (max-width: 428px) {
    width: 100%;
    padding: 0 54px;
    font-size: 18px;
    line-height: 26px;
  }
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

  @media (max-width: 428px) {
    width: 100%;
    padding: 0 50px;
    font-size: 12px;
    line-height: 22px;
  }

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

  @media (max-width: 428px) {
    width: 112px;
    height: 38px;
    font-size: 14px;
    line-height: 21px;
  }
`;
