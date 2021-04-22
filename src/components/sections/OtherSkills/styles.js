import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlack,
  colorGrayNormal,
  colorGrayDark,
  colorRedBright
} from '../../../styles/theme';
import { Hidden, NotDisplayed } from '../../../styles/global';

export const KeyboardKeysWrapper = styled.div`
  position: absolute;
  top: 58px;
  left: 25px;
  opacity: 0.5;
  width: 70px;

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;
KeyboardKeysWrapper.displayName = 'Keyboard Keys Wrapper';

export const Keys = styled.div`
  transform: perspective(0em) rotateX(120deg) skewX(100deg);
  margin: -10px 0;
  letter-spacing: -1.3px;
  line-height: 0.9;
  text-align: center;
`;
Keys.displayName = 'Keyboard Keys';

export const MacCloseButton = styled.button`
  z-index: 10;
  position: fixed;
  top: 43px;
  left: 6px;
  background: ${colorRedBright};
  border: 0;
  border-radius: 50%;
  height: 13px;
  width: 13px;
  font-size: 0.6rem;
  color: ${colorBlack};
  cursor: pointer;
  outline: none !important;
  ${Hidden}

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
    `}

  &::after {
    content: 'x';
    transform: translate(-3px, -3px);
    display: block;
    font-size: 1rem;
    font-family: monospace;
  }

  &:hover {
    color: ${colorWhite};
  }

  ${({ isTabButton }) =>
    isTabButton &&
    css`
      top: 47px;
      left: 570px;
      background: #f2f2f2;
      font-weight: bolder;

      &::after {
        content: 'x';
        transform: translate(-3px, -3px);
        display: block;
        font-size: 1.2rem;
        font-family: monospace;
      }
      &:hover {
        color: ${colorRedBright};
      }
    `}
`;

export const MacKeyboard = styled.div`
  position: absolute;
  top: 30px;
  left: 2px;
  opacity: 0.6;
  transform: perspective(9em) rotateX(65deg) skewX(15deg);
  border-bottom: 3px solid ${colorBlack};
  border-left: 1px solid ${colorBlack};
  background: ${colorGrayNormal};

  height: 55px;
  width: 77px;
  box-shadow: -2px 2px 10px 3px ${rgba(colorGrayDark, 0.8)};

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;
MacKeyboard.displayName = 'Mac Keyboard';

export const MacScreen = styled.div`
  opacity: 0.9;
  transform: perspective(8em) rotateX(-5deg) skewX(-4deg);
  border-left: 1px solid ${colorGrayNormal};
  background: ${colorBlack};
  height: 50px;
  width: 70px;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: none;
      border-left: 0;
      background: ${colorWhite};
      height: ${`${window.innerHeight}px`};
      width: 100%;
      overflow: hidden;
    `}
`;
MacScreen.displayName = 'Mac Screen';

export const SectionOtherSkills = styled.section`
  z-index: 6;
  position: absolute;
  top: 80vh;
  left: 60%;
  opacity: 0.8;
  height: 50px;
  width: 70px;

  @media all and (min-width: 768px) {
    left: 40%;

    ${({ visible }) =>
      visible &&
      css`
        top: 0;
        left: 0;
        opacity: 1;
        height: auto;
        width: 100%;
      `}
  }
`;
SectionOtherSkills.displayName = 'OTHER SKILLS Section';

export const TopBar = styled.img`
  z-index: 9;
  position: absolute;
  top: 0;
  width: 60px;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      z-index: 4;
      position: fixed;
      top: 0;
      left: -8px;
      width: 101vw;
    `}
`;
TopBar.displayName = 'Top Bar';
