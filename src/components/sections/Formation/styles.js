import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlack,
  fontSubtitle,
  colorYellowBright,
  colorBlueWater,
  colorYellowDark,
  fontTitleAlt
} from '../../../styles/theme';
import { Title } from '../Experiences/styles';

export const Details = styled.p`
  margin: 0 20px;
  font-family: ${({ subtext }) => (subtext ? fontTitleAlt : fontSubtitle)};
  font-size: 0.9rem;
  line-height: 1;

  @media all and (min-width: 768px) {
    margin: 0 40px;
    font-size: 1rem;
    line-height: 1.3;
  }
  &:first-of-type {
    margin-top: 5px;
  }
`;
Details.displayName = 'Details';

const goIn = (formationItems, index) => keyframes`
  0% {
    margin-left : -100vw;
  }

  100% {
      margin-left: ${`${
        (10 / formationItems) * ((index + 1) * formationItems)
      }px`};  }
`;

export const DetailsArea = styled.div`
  margin-top: 10px;
  width: 80%;

  ${({ formationItems, index }) =>
    formationItems &&
    css`
      animation: ${goIn(formationItems, index)} 2s forwards;
    `}

  @media all and (min-width: 768px) {
    margin-top: 0;

    ${({ formationItems, index }) =>
      formationItems &&
      css`
        margin-left: ${`${
          (60 / formationItems) * ((index + 1) * formationItems)
        }px`};
      `}
  }
`;
DetailsArea.displayName = 'Details Area';

export const FakeText = styled.p`
  width: 100%;
  font-size: 0.9rem;
  line-height: 0.8;
  text-align: center;
`;
FakeText.displayName = 'Fake Text';

export const FormationArea = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
FormationArea.displayName = 'Formation Area';

export const FormationItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 0;
  height: auto;
  width: 100%;
`;
FormationItem.displayName = 'Formation Item';

export const FormationTitle = styled(Title)`
  &:hover {
    letter-spacing: 0.1rem;
    color: ${colorYellowDark};
  }
`;
FormationTitle.displayName = 'Formation Title';

export const FormationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 50px auto 0;
  padding-right: 5vw;
  height: ${`${window.innerHeight}px`};
  width: 100%;

  @media all and (min-width: 768px) {
    margin: 0 auto;
    height: auto;
    justify-content: space-around;
  }
`;
FormationWrapper.displayName = 'Formation Wrapper';

export const SectionFormation = styled.section`
  z-index: 6;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 0.95;
      transform: none;
      height: 100%;
      width: 100vw;

      &:hover {
        border: 2px solid ${colorBlack};
        opacity: 0.95;
      }
    `}

  @media all and (min-width: 768px) {
    position: absolute;
    bottom: 50px;
    left: 44%;
    opacity: 0.5;
    transform: perspective(5em) rotateX(50deg);
    outline: none;
    border: 1px solid ${colorBlack};
    border-radius: 10px 0;
    height: 40px;
    width: 60px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 5px 0 ${rgba(colorBlack, 0.4)},
      inset 0 1px 5px 1px ${rgba(colorWhite, 0.7)};
    background-image: linear-gradient(
      to top right,
      ${colorWhite},
      ${colorBlueWater},
      ${colorBlueLight}
    );

    &:hover {
      opacity: 0.7;
      border: 3px solid ${colorYellowBright};
    }

    ${({ visible }) =>
      visible &&
      css`
        top: 40px;
        left: 20vw;
        opacity: 0.95;
        transform: none;
        border: 2px solid ${colorBlack};
        border-radius: 40px 0;
        height: 90vh;
        width: 60vw;
        padding: 15px;
        cursor: default;

        &:hover {
          border: 2px solid ${colorBlack};
          opacity: 0.95;
        }
      `}
  }
`;
SectionFormation.displayName = 'FORMATION Section';

export const VerticalBar = styled.div`
  position: absolute;
  left: 10%;
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 100%;
  width: 0;
`;
VerticalBar.displayName = 'Vertical Bar';
