import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlueLight,
  colorBlueNormal,
  colorBlueWater,
  colorGrayDark,
  colorGreenBright,
  colorGreenPale,
  colorWhite,
  colorYellowBright,
  colorYellowPale,
  fontSubtitle,
  fontTitle
} from '../../../../styles/theme';

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

  & th {
    padding-top: 10px;
    letter-spacing: 0;
    text-shadow: 0 0 1px ${colorWhite};
    font-family: ${fontTitle};
    font-size: 0.8rem;
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
    padding: 0 10px;
    vertical-align: middle;
    font-size: 0.7rem;
    font-weight: bold;
    color: ${colorGrayDark};
    text-align: center;
  }

  & td {
    padding-right: 10px;
    font-size: 0.6rem;
    text-align: left;

    @media all and (min-width: 768px) {
      font-size: 0.7rem;

      & tr td:first-of-type {
        font-size: 0.6rem;
      }
    }
  }

  @media all and (min-width: 768px) {
    width: 90%;
  }
`;

export const DesignArea = styled(OtherSkillsOuter)`
  margin-top: -60px;
  margin-bottom: 50px;
`;
DesignArea.displayName = 'Design Area';

export const DesignText = styled.p`
  margin: 15px auto;
`;
DesignText.displayName = 'Design Text';

export const Flag = styled.img`
  position: absolute;
  left: -15px;
  border-radius: 50%;
  padding: 5px;
  max-width: 24px;

  @media all and (min-width: 768px) {
    top: 35px;
    left: -35px;
    background: ${rgba(colorWhite, 0.5)};
    border: 1px solid ${colorGreenPale};
    max-width: 32px;
  }
`;
Flag.displayName = 'Flag';

export const Icon = styled.i`
  position: absolute;
  left: 10px;
  color: ${colorBlueLight};
`;
Icon.displayName = 'Icon';

export const LanguagesArea = styled(OtherSkillsOuter)`
  margin: 40px 0 0 10px;
  width: 40%;

  @media all and (min-width: 768px) {
    margin: 30px 0 0;
    grid-row-start: span 2;
    padding: 10px 20px 30px 30px;
    height: auto;
    width: 100%;
  }
`;
LanguagesArea.displayName = 'Languages Area';

export const LanguagesTable = styled(OtherSkillsTable)`
  margin: 0 auto;

  & td {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    height: 20px;
    width: 100%;
    align-items: center;
    font-size: 0.7rem;

    &:hover {
      background: ${rgba(colorYellowBright, 0.5)};
      font-size: 1.1rem;
    }
  }

  & td:first-of-type {
    margin-top: 10px;
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

  @media all and (min-width: 768px) {
    & td {
      padding-left: 60px;
      height: 3vh;
      width: 100%;
    }

    & tr td:first-of-type {
      margin-top: 15px;
      font-size: 1.5rem;
    }
  }
`;
LanguagesTable.displayName = 'Languages Table';

export const OtherInformationAreaArea = styled(OtherSkillsOuter)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  width: 50%;
  margin: 40px 10px 0;

  @media all and (min-width: 768px) {
    display: block;

    width: 100%;
  }
`;
OtherInformationAreaArea.displayName = 'Other Informations Area';

export const OtherInformationAreaTable = styled(OtherSkillsTable)`
  margin: 0 0 30px;
  width: 100%;

  & td {
    height: auto;
    width: auto;
  }

  & tr {
    line-height: 1;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${rgba(colorYellowPale, 0.5)};
      font-size: 0.8rem;
    }
  }

  & tr td {
    padding: 10px 5px;
  }

  & tr td:first-of-type {
    padding: 5px 0;
  }

  & tr:nth-child(even) {
    background-color: ${rgba(colorWhite, 0.5)};

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

  @media all and (min-width: 768px) {
    & td {
      width: auto;

      &:first-of-type {
        width: 250px;
        padding-left: 5px;
        font-size: 0.6rem;
      }
    }

    & tr {
      display: flex;
      flex-direction: initial;
      justify-content: center;
      align-content: space-between;
      height: 5vh;
      line-height: 40px;
      font-size: 0.6rem;

      & td {
        width: 20vw;

        &:nth-child(2) {
          width: 50%;
          text-align: left;
        }
      }

      &:hover {
        background: ${rgba(colorYellowPale, 0.5)};
        font-size: 0.7rem;
      }
    }
  }
`;
OtherInformationAreaTable.displayName = 'Other Informations Table';

interface OtherSkillsWrapperProps
  extends React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
}

export const OtherSkillsWrapper = styled.div<OtherSkillsWrapperProps>`
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  flex-wrap: wrap;
  overflow: hidden;

  @media all and (min-width: 768px) {
    position: relative;
    top: 5px;
    left: 5px;
    height: 40px;
    width: 60px;
    opacity: 0.9;
    transform: perspective(-1em) rotateX(-2deg) skewX(-1deg);
    background-image: linear-gradient(${colorBlueWater}, ${colorWhite});
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
        top: 90px;
        left: 0;
        height: 100%;
        width: 100vw;
        opacity: 1;
        transform: none;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto;
        grid-gap: 50px;
        padding: 10px 50px 30px;
        background-image: linear-gradient(
          ${rgba(colorBlueWater, 0.3)},
          ${rgba(colorWhite, 0.2)}
        );
        overflow: hidden;
        cursor: default;

        &:hover {
          border: 0;
        }
      `}
  }
`;
OtherSkillsWrapper.displayName = 'Other Skills Wrapper';

interface SampleProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
}

export const Sample = styled.div<SampleProps>`
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
Sample.displayName = 'Sample';

export const SamplesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
`;
SamplesWrapper.displayName = 'Samples Wrapper';

export const Title = styled.h2`
  margin: 10px 0;
  width: 100%;
  font-family: ${fontSubtitle};
  font-size: 1.2rem;
  text-align: center;

  @media all and (min-width: 768px) {
    margin: 5px 20px 10px 0;
    font-size: 1.3rem;
  }
`;
Title.displayName = 'Title';
