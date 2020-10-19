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
  colorYellowPale
} from '../../../styles/theme';
import { NotDisplayed } from '../../../styles/global';

export const SectionOtherSkills = styled.section`
  z-index: 6;
  position: relative;
  top: 80vh;
  left: 60%;
  opacity: 0.8;
  height: 50px;
  width: 70px;

  @media all and (min-width: 768px) {
    left: 40%;
  }

  ${({ visible }) =>
    visible &&
    css`
      top: 0;
      left: -8px;
      opacity: 1;
      height: 100vh;
      width: 100%;
    `}
`;

export const OtherSkillsMacScreen = styled.div`
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
      height: 100vh;
      width: 100%;
      overflow-y: scroll;
    `}
`;

const BrightScreen = keyframes`
	from {
		box-shadow : 0 0 10px 3px ${colorGreenPale};
	}

	to {
		box-shadow : 0 0 30px 1px ${colorBlueWater};
	}
`;

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
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  animation-name: ${BrightScreen};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &:hover {
    opacity: 1;
    border: 5px solid ${colorYellowBright};
  }

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transform: none;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      border: 2px solid ${colorBlack};
      background-image: linear-gradient(
        ${rgba(colorBlueWater, 0.3)},
        ${rgba(colorWhite, 0.2)}
      );
      height: 100vh;
      width: 100vw;
      overflow-y: scroll;
      padding: 10px 0 30px;
      cursor: default;

      @media all and (min-width: 768px) {
        grid-template-columns: 1fr 3fr;
        grid-gap: 50px;
        padding: 100px 50px 30px;
      }

      &:hover {
        border: 2px solid ${colorBlack};
      }

      & .seabed__click2close-otherSkills {
        top: 30px;
        right: 10px;
        display: block;

        @media all and (min-width: 768px) {
          top: 100px;
          right: 50px;
        }
      }
    `}
`;

export const OtherSkillsTopBar = styled.img`
  z-index: 3;
  position: absolute;
  top: 0;
  width: 60px;

  ${({ visible }) =>
    visible &&
    css`
      z-index: 4;
      position: fixed;
      top: 0;
      left: -8px;
      width: 101vw;
    `}
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

export const OtherSkillsLanguagesWrapper = styled(OtherSkillsOuter)`
  padding: 10px 20px 30px 30px;
  grid-row-start: span 2;
`;

export const OtherSkillsDesign = styled(OtherSkillsOuter)`
  margin-top: -60px;
  margin-bottom: 50px;
`;

export const OtherSkillsMacKeyboard = styled.div`
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

export const OtherSkillsMacKeyboardKeysWrapper = styled.div`
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

export const OtherSkillsMacKeyboardKeys = styled.div`
  transform: perspective(0em) rotateX(120deg) skewX(100deg);
  margin: -10px 0;
  letter-spacing: -1.3px;
  line-height: 0.9;
  text-align: center;
`;

export const OtherSkillsTableTitle = styled.h2`
  margin: 10px 0;
  width: 100%;
  font-family: ${fontSubtitle};
  font-size: 2rem;
  text-align: center;

  @media all and (min-width: 768px) {
    margin: 10px 20px 10px 0;
  }
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

export const OtherSkillsLanguagesTable = styled(OtherSkillsTable)`
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

export const OtherSkillsLanguageFlag = styled.img`
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

export const OtherSkillsLanguageIcon = styled.i`
  position: absolute;
  left: 10px;
  color: ${colorBlueLight};
`;

export const OtherSkillsOthersWrapper = styled(OtherSkillsOuter)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  padding-bottom: 30px;
`;

export const OtherSkillsOthersTable = styled(OtherSkillsTable)`
  margin-bottom: 30px;

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

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 1rem;
    }
  }

  & tr:nth-child(even) {
    background-color: ${rgba(colorWhite, 0.5)};

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 1rem;
    }
  }

  & thead tr {
    &:hover {
      background: none;
    }
  }
`;

export const OtherSkillsDesignText = styled.p`
  margin: 15px auto;
`;

export const OtherSkillsDesignSamplesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const OtherSkillsDesignSample = styled.div`
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
