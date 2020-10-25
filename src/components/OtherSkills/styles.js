import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlack,
  colorGrayNormal,
  fontSubtitle,
  colorGreenBright,
  colorBlueNormal,
  fontTitle,
  colorGrayDark,
  colorYellowBright,
  colorBlueWater,
  colorGreenPale,
  colorYellowPale,
  colorRedBright,
  fontTitleAlt
} from '../../styles/theme';
import { Hidden, NotDisplayed } from '../../styles/global';

const BrightScreen = keyframes`
	from {
		box-shadow : 0 0 10px 3px ${colorGreenPale};
	}

	to {
		box-shadow : 0 0 20px 1px ${colorBlueWater};
	}
`;

const OtherSkillsOuter = styled.div`
  border-radius: 30px;
  margin: 30px auto 0;
  background-image: linear-gradient(
    ${rgba(colorGreenBright, 0.1)},
    ${rgba(colorWhite, 0.2)}
  );
  width: 100%;
  padding: 10px 15px 30px;
`;

const OtherSkillsTable = styled.table`
  margin: 0 auto;
  width: 100%;
  letter-spacing: 1px;
  font-family: sans-serif;

  @media all and (min-width: 768px) {
    width: 90%;
  }

  & th {
    padding-top: 10px;
    letter-spacing: 0;
    text-shadow: 0 0 1px ${colorWhite};
    font-family: ${fontTitle};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
    color: ${colorGreenBright};
    text-align: center;

    @media all and (min-width: 768px) {
      padding-top: 15px;
      letter-spacing: 1px;
      font-size: 1.3rem;
    }
  }

  & tr td:first-of-type {
    width: 35%;
    padding: 0 10px;
    vertical-align: middle;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${colorGrayDark};
    text-align: center;
  }

  & td {
    height: 30px;
    width: 65%;
    padding-right: 10px;
    font-size: 0.8rem;
    text-align: left;

    @media all and (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const CloseButton = styled.button`
  border: 1px solid $[colorRedDark];
  border-radius: 5px 0;

  padding: 2px 5px;
  text-shadow: 0 0 1px ${rgba(colorGrayDark, 0.51)};
  font-family: ${fontTitleAlt};
  font-size: 0.7rem;
  color: ${colorBlack};
  cursor: pointer;
  box-shadow: 0 1px 2px 0 ${rgba(colorBlack, 0.4)},
    inset 0 1px 5px 1px ${rgba(colorWhite, 0.7)};
  grid-column-start: span 2;

  @media all and (min-width: 321px) {
    border-radius: 8px 0;
    padding: 2px 10px;
    font-size: 1.2rem;
  }

  @media all and (min-width: 768px) {
    top: 32px;
    right: 60px;
    border-radius: 12px 0;
    padding: 3px 12px;
    font-size: 1.4rem;
  }

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: inset 0 2px 5px 1px ${rgba(colorBlack, 0.4)};
  }

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;
CloseButton.displayName = '--- Close Button ---';

export const DesignArea = styled(OtherSkillsOuter)`
  margin-top: -60px;
  margin-bottom: 50px;
`;
DesignArea.displayName = '--- Design Area ---';

export const DesignText = styled.p`
  margin: 15px auto;
`;
DesignText.displayName = '--- Design Text ---';

export const Flag = styled.img`
  position: absolute;
  top: 60px;
  left: -28px;
  border: 1px solid ${colorGreenPale};
  border-radius: 50%;
  background: ${rgba(colorWhite, 1)};
  padding: 5px;

  @media all and (min-width: 768px) {
    left: -35px;
  }
`;
Flag.displayName = '--- Flag ---';

export const Icon = styled.i`
  position: absolute;
  left: 10px;
  color: ${colorBlueLight};
`;
Icon.displayName = '--- Icon ---';

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
KeyboardKeysWrapper.displayName = '--- Keyboard Keys Wrapper ---';

export const Keys = styled.div`
  transform: perspective(0em) rotateX(120deg) skewX(100deg);
  margin: -10px 0;
  letter-spacing: -1.3px;
  line-height: 0.9;
  text-align: center;
`;
Keys.displayName = '--- Keyboard Keys ---';

export const LanguagesArea = styled(OtherSkillsOuter)`
  padding: 10px 20px 30px 30px;
  grid-row-start: span 2;
`;
LanguagesArea.displayName = '--- Languages Area ---';

export const LanguagesTable = styled(OtherSkillsTable)`
  margin: 0 auto;
  width: 100%;

  & td {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 60px;

    &:hover {
      background: ${rgba(colorYellowBright, 0.5)};
      font-size: 1.1rem;
    }
  }

  & td:first-of-type {
    margin-top: 15px;
    width: 80%;
    padding-left: 10px;
    letter-spacing: 1px;
    text-shadow: 0 0 1px ${colorWhite};
    font-family: ${fontTitle};
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colorGreenBright};

    &:hover {
      background: none;
    }
  }

  & td:nth-child(even) {
    background-color: ${rgba(colorWhite, 0.5)};

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 1.1rem;
    }

    & .icon--languages {
      color: ${colorBlueNormal};
    }
  }
`;
LanguagesTable.displayName = '--- Languages Table ---';

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
MacKeyboard.displayName = '--- Mac Keyboard ---';

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
      height: calc(100vh - 110px);
      width: 100%;
      overflow-y: scroll;
    `}
`;
MacScreen.displayName = '--- Mac Screen ---';

export const OtherInformationsArea = styled(OtherSkillsOuter)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  padding-bottom: 30px;
`;
OtherInformationsArea.displayName = '--- Other Informations Area ---';

export const OtherInformationsTable = styled(OtherSkillsTable)`
  margin-bottom: 30px;
  font-size: 0.8rem;

  & td {
    height: 40px;
    width: auto;

    &:first-of-type {
      width: 250px;
      padding-left: 5px;
    }
  }

  & tr {
    line-height: 40px;
    font-size: 0.8rem;

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 0.8rem;
    }
  }

  & tr:nth-child(even) {
    background-color: ${rgba(colorWhite, 0.5)};
    font-size: 0.8rem;

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 0.8rem;
    }
  }

  & thead tr {
    &:hover {
      background: none;
    }
  }
`;
OtherInformationsTable.displayName = '--- Other Informations Table ---';

export const OtherSkillsWrapper = styled.div`
  z-index: 3;
  position: relative;
  top: 5px;
  left: 5px;
  opacity: 0.9;
  transform: perspective(-1em) rotateX(-2deg) skewX(-1deg);
  background-image: linear-gradient(${colorBlueWater}, ${colorWhite});
  height: 40px;
  width: 60px;
  overflow: hidden;
  cursor: pointer;
  animation-name: ${BrightScreen};
  animation-duration: 650ms;
  animation-iteration-count: infinite;

  &:hover {
    opacity: 1;
    border: 5px solid ${colorYellowBright};
  }

  ${({ visible }) =>
    visible &&
    css`
      top: 0;
      left: 0;
      opacity: 1;
      transform: none;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      background-image: linear-gradient(
        ${rgba(colorBlueWater, 0.3)},
        ${rgba(colorWhite, 0.2)}
      );
      height: auto;
      width: 100%;
      overflow-y: scroll;
      padding: 10px 0 30px;
      cursor: default;

      @media all and (min-width: 768px) {
        grid-template-columns: 1fr 3fr;
        grid-gap: 50px;
        padding: 0 50px 30px;
      }

      &:hover {
        border: 0;
      }
    `}
`;
OtherSkillsWrapper.displayName = '--- Other Skills Wrapper ---';

export const Sample = styled.div`
  border: 3px solid ${rgba(colorWhite, 0.5)};
  height: 120px;
  width: 28vw;
  cursor: pointer;
  background-size: cover;

  @media all and (min-width: 768px) {
    width: 20vw;
  }

  ${({ image }) => css`
    background-image: url(${image});
  `}

  &:hover {
    border: 3px solid ${colorYellowBright};
  }
`;
Sample.displayName = '--- Sample ---';

export const SamplesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;
SamplesWrapper.displayName = '--- Samples Wrapper ---';

export const SectionOtherSkills = styled.section`
  z-index: 6;
  position: fixed;
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
        padding-top: 110px;
      `}
  }
`;
SectionOtherSkills.displayName = '--- OTHER SKILLS Section ---';

export const Title = styled.h2`
  margin: 10px 0;
  width: 100%;
  font-family: ${fontSubtitle};
  font-size: 2rem;
  text-align: center;

  @media all and (min-width: 768px) {
    margin: 10px 20px 10px 0;
  }
`;
Title.displayName = '--- Title ---';

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
TopBar.displayName = '--- Top Bar ---';
