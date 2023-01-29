import styled from 'styled-components';

interface IPropsQuestion {
  isLastStep?: boolean;
  availableToNext?: boolean;
}

export const ContainerChallenge = styled.div<IPropsQuestion>`
  width: 472.5px;
  height: ${({ isLastStep }) => (isLastStep ? '493px' : '653.76px')};
  background: ${props => props.theme['white-100']};

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

  @media (max-width: 428px) {
    width: 336px;
    height: ${({ isLastStep }) => (isLastStep ? '370px' : '464px')};

    .X {
      position: relative;
      left: 140px;
      top: 10px;
      width: 19px;
      height: 19px;
    }
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  width: 320px;
  font-size: 27px;
  margin-top: 90px;
  color: ${props => props.theme['black']};
  letter-spacing: -0.02em;

  @media (max-width: 428px) {
    width: 100%;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: ${props => props.theme['black']};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 59.62px;

  @media (max-width: 428px) {
    width: 100%;
    font-size: 12px;
    line-height: 22px;
    padding-left: 45px;
    padding-right: 54px;
  }
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
    background: ${props => props.theme['gray-100']};
  }

  .SliderTrack {
    background: ${props => props.theme['gray-100']};
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
    background: ${props => props.theme['primaryGradient']};
    border-radius: 9999px;
    height: 100%;
  }

  .SliderThumb {
    display: block;
    width: 25.3px;
    height: 13.72px;

    background: ${props => props.theme['white-200']};
    border: 2.11667px solid ${props => props.theme['gray-200']};
    border-radius: 20.7376px;
    cursor: pointer;
  }

  @media (max-width: 428px) {
    img {
      width: 290px;
    }

    .SliderRoot {
      width: 250px;
    }

    .SliderThumb {
      display: block;
      width: 18px;
      height: 13.72px;
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 15.88px;
  background: ${props => props.theme['gray-100']};
  resize: none;
  border: none;
  width: 365.63px;
  height: 88.67px;
  border-radius: 5.625px;
  margin-top: 25px;
  margin-bottom: -1rem;

  position: relative;
  bottom: 25px;

  font-style: normal;
  font-weight: 300;
  font-size: 15.75px;

  letter-spacing: -0.02em;
  color: ${props => props.theme['gray-300']};

  &::placeholder {
    padding-left: 15.75px;
  }

  @media (max-width: 428px) {
    width: 260px;
    height: 78.4px;
    font-size: 10px;
    line-height: 26px;
    padding: 12px;
  }
`;

export const Required = styled.p`
  width: 100%;
  height: auto;
  text-align: left;
  padding-left: 1rem;

  color: ${props => props.theme['primaryPink']};
  font-style: normal;
  font-weight: 400;
  font-size: 14.63px;
  letter-spacing: -0.02em;

  @media (max-width: 1440px) {
    bottom: 110px;
  }

  @media (max-width: 1024px) {
    bottom: 80px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
    line-height: 26px;
  }
`;

export const Button = styled.button<IPropsQuestion>`
  background: ${({ availableToNext, theme }) =>
    availableToNext ? theme['primaryGradient'] : theme['gray-200']};
  width: 157.5px;
  height: 43.71px;
  padding: 10.8571px 14.4762px;
  border-radius: 1.80952px;
  cursor: pointer;
  border: none;
  margin-bottom: 47px;
  margin-top: 30px;

  color: ${props => props.theme['white-200']};
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

export const ContainerButtonSubmit = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
