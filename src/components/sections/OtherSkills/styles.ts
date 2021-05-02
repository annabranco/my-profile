import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlack,
  colorGrayNormal,
  colorGrayDark,
  colorRedBright,
  fontSubtitle
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

export const MacCamera = styled.div`
  z-index: 100;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 20px;
  height: 20px;
  background: #2f353f;
  border-radius: 50px;
  border: 2px solid ${rgba('#2f353f', 0.1)};
  box-shadow: inset 0 0 1px ${rgba('black', 0.1)};

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    background-color: white;
    opacity: 0.3;
    box-shadow: 0 0 5px 3px white;
  }

  @media all and (min-width: 2000px) {
    top: -35px;
  }
`;
MacCamera.displayName = 'Keyboard MacCamera';

interface MacCloseButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isTabButton?: boolean;
  visible?: boolean;
}

export const MacCloseButton = styled.button<MacCloseButtonProps>`
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

interface MacKeyboardProps extends React.ComponentPropsWithoutRef<'div'> {
  hidden?: boolean;
}

export const MacKeyboard = styled.div<MacKeyboardProps>`
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

interface MacScreenProps extends React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
}

export const MacScreen = styled.div<MacScreenProps>`
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
      height: ${`calc(${window.innerHeight}px - 60px)`};
      width: 100%;
      overflow: hidden;
    `}

  @media all and (min-width: 2000px) {
    ${({ visible }) =>
      visible &&
      css`
        height: ${`calc(${window.innerHeight}px - 120px)`};
      `}
  }
`;
MacScreen.displayName = 'Mac Screen';

export const Mark = styled.div`
  z-index: 100;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-weight: 500;
  font-family: ${fontSubtitle};
  font-size: 0.9rem;
  opacity: 0.8;
  letter-spacing: 1px;
  user-select: none;

  @media all and (min-width: 2000px) {
    bottom: -40px;
  }
`;
Mark.displayName = 'Keyboard Mark';

export const MarkLight = styled.span`
  font-weight: 100;
`;
MarkLight.displayName = 'Keyboard MarkLight';

interface SectionOtherSkillsProps
  extends React.ComponentPropsWithoutRef<'section'> {
  visible?: boolean;
}

export const SectionOtherSkills = styled.section<SectionOtherSkillsProps>`
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
        width: 101%;
        border: 30px solid #1e2126;
      `}
  }
  @media all and (min-width: 1400px) {
    ${({ visible }) =>
      visible &&
      css`
        width: 100%;
      `}
  }

  @media all and (min-width: 2000px) {
    ${({ visible }) =>
      visible &&
      css`
        border: 60px solid #1e2126;
      `}
  }
`;
SectionOtherSkills.displayName = 'OTHER SKILLS Section';

interface TopBarProps extends React.ComponentPropsWithoutRef<'img'> {
  visible?: boolean;
}

export const TopBar = styled.img<TopBarProps>`
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
      top: 30px;
      left: 30px;
      width: 96.3vw;
    `}

  @media all and (min-width: 2000px) {
    top: 60px;
    left: 60px;
    width: 95.5vw;
  }
`;
TopBar.displayName = 'Top Bar';
