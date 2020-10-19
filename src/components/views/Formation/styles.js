import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlueDark,
  colorBlack,
  fontSubtitle,
  fontTitleAlt,
  fontTitle,
  colorYellowBright,
  colorBlueWater,
  colorRedDark,
  colorYellowDark
} from '../../../styles/theme';

export const SectionFormation = styled.section`
  z-index: 6;
  position: absolute;
  top: initial;
  bottom: 50px;
  left: 20%;
  opacity: 0.5;
  transform: perspective(5em) rotateX(50deg);
  outline: none;
  border: 1px solid ${colorBlack};
  border-radius: 10px 0;
  background-image: linear-gradient(
    to top right,
    ${colorWhite},
    ${colorBlueWater},
    ${colorBlueLight}
  );
  height: 40px;
  width: 60px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 5px 0 ${rgba(colorBlack, 0.4)},
    inset 0 1px 5px 1px ${rgba(colorWhite, 0.7)};

  @media all and (min-width: 768px) {
    left: 40%;
  }

  &:hover {
    opacity: 0.7;
    border: 3px solid ${colorYellowBright};
  }

  ${({ visible }) =>
    visible &&
    css`
      bottom: 0;
      left: 0;
      opacity: 0.95;
      transform: none;
      border: 2px solid ${colorBlack};
      border-radius: 0;
      height: 90vh;
      width: 100vw;
      padding: 5px;
      cursor: default;

      &:hover {
        border: 2px solid ${colorBlack};
        opacity: 0.95;
      }

      @media all and (min-width: 768px) {
        top: 40px;
        bottom: initial;
        left: 20vw;
        opacity: 0.95;
        transform: none;
        border: 2px solid ${colorBlack};
        border-radius: 40px 0;
        height: 90vh;
        width: 75vw;
        padding: 15px;
      }
    `}
`;

export const FakeText = styled.p`
  width: 100%;
  font-size: 0.9rem;
  line-height: 0.8;
  text-align: center;
`;

export const FormationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;

export const FormationInnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;

const FormationBaseInnerStyles = css`
  margin-top: 50px;
  height: 25%;

  @media all and (min-width: 321px) {
    margin-top: 25px;

    &:first-of-type {
      margin-top: 60px;
    }

    &:last-of-type {
      margin-top: 10px;
    }
  }

  @media all and (min-width: 768px) {
    margin-top: 40px;
  }

  &:first-of-type {
    margin-top: 35px;
  }

  &:last-of-type {
    margin-top: 10px;
  }
`;

export const FormationYear = styled.div`
  ${FormationBaseInnerStyles}
  margin-right : 5px;
  width: 40px;
  font-family: ${fontTitle};
  font-size: 0.8em;
  color: ${colorRedDark};
  text-align: center;

  @media all and (min-width: 321px) {
    margin-right: 10px;
    width: 60px;
    font-size: 1.2em;
  }

  @media all and (min-width: 768px) {
    margin-right: 15px;
    width: 60px;
  }
`;

export const FormationVerticalBar = styled.div`
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 80vh;

  @media all and (min-width: 768px) {
    height: 85vh;
  }
`;

export const FormationSeparator = styled.div`
  ${FormationBaseInnerStyles}
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 80vh;

  @media all and (min-width: 768px) {
    height: 85vh;
  }
`;

export const FormationHorizontalBar = styled.div`
  display: inline-block;
  border-top: 5px solid ${rgba(colorBlueLight, 0.3)};
`;

export const FormationTitle = styled.h2`
  display: inline;
  margin-left: 20px;
  font-family: ${fontTitleAlt};
  font-size: 1rem;
  color: ${colorBlueDark};

  @media all and (min-width: 321px) {
    font-size: 1.4rem;
  }

  &:hover {
    letter-spacing: 0.1rem;
    color: ${colorYellowDark};
  }
`;

export const FormationDetails = styled.p`
  margin: 5px 10px;
  font-family: ${fontSubtitle};
  font-size: 0.9rem;
  line-height: 1;

  @media all and (min-width: 768px) {
    font-size: 1rem;
    line-height: 2;
  }
`;

export const FormationFlag = styled.img`
  margin-left: 5px;
  vertical-align: middle;
`;

export const FormationMore = styled.p`
  position: absolute;
  bottom: 5px;
  right: 35px;
  font-size: 0.8rem;

  @media all and (min-width: 321px) {
    bottom: 15px;
    font-size: 1rem;
  }
`;

export const FormationMoreLink = styled.a`
  margin-left: 5px;
  vertical-align: super;
`;
