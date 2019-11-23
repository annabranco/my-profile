import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlueDark,
  colorBlack,
  colorGrayNormal,
  fontSubtitle,
  fontTitleAlt
} from '../../../styles/theme';

export const BackgroundOverlay = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${rgba(colorWhite, 0.6)},
    ${rgba(colorBlueDark, 0.4)},
    ${rgba(colorBlueDark, 0.6)},
    ${rgba(colorBlack, 0.9)}
  );
  height: 100vh;
  width: 100vw;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid;
  border-radius: 40px 0;
  background-image: linear-gradient(
    to bottom left,
    ${colorWhite},
    #e6f4f4,
    ${colorBlueLight}
  );
  height: 280px;
  width: 340px;
  padding: 20px;
  box-shadow: 2px 2px 10px 2px ${rgba(colorGrayNormal, 0.7)};

  @media all and (min-width: 560px) {
    border-radius: 50px 0;
    height: 300px;
    width: 480px;
  }
`;

export const ModalText = styled.p`
  margin: 5px 0;
  font-family: ${fontSubtitle};
  font-size: 0.8rem;
  text-align: center;

  @media all and (min-width: 560px) {
    font-size: 1rem;
  }
`;

export const FlagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin: 10px auto 0;

  @media all and (min-width: 560px) {
    margin: 20px auto 0;
  }
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  margin: 10px;
  cursor: pointer;

  ${props =>
    !props.active &&
    css`
      display: none;
    `}
`;

const activeFlag = css`
  opacity: 1;
  cursor: default;
`;

export const FlagLabel = styled.div`
  margin-bottom: 3px;
  font-family: ${fontTitleAlt};
  font-size: 0.8rem;
  text-align: center;
`;

export const FlagImage = styled.img`
  opacity: 0.5;
  margin-top: -10px;
  width: 100%;

  ${props =>
    props.lang === props.languageSelected &&
    css`
      ${activeFlag}
    `}
`;

export const CheckBox = styled.input`
  margin-right: 20px;
`;

export const CheckBoxArea = styled(ModalText)`
  margin: 30px 0 10px;
`;
