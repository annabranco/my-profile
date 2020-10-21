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
import { Logo } from '../Skills/styles';

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
      width: 100%;
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
SectionFormation.displayName = '--- FORMATION Section ---';

export const FakeText = styled.p`
  width: 100%;
  font-size: 0.9rem;
  line-height: 0.8;
  text-align: center;
`;
FakeText.displayName = '--- Fake Text ---';

export const FormationArea = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
FormationArea.displayName = '--- Formation Area ---';

export const VerticalBar = styled.div`
  position: absolute;
  left: 10%;
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 100%;
  width: 0;
`;
VerticalBar.displayName = '--- Vertical Bar ---';

export const FormationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 auto;
  padding-right: 5vw;
  height: auto;
  width: 100%;
`;
FormationWrapper.displayName = '--- Formation Wrapper ---';

export const FormationItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 0;
  height: auto;
  width: 100%;
`;
FormationItem.displayName = '--- Formation Item ---';

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
FormationTitle.displayName = '--- Formation Title ---';

export const DetailsArea = styled.div`
  width: 80%;

  ${({ margin }) =>
    margin &&
    css`
      margin-left: ${margin};
    `}
`;
DetailsArea.displayName = '--- Details Area ---';

export const Details = styled.p`
  margin: 0 40px;
  font-family: ${fontSubtitle};
  font-size: 0.9rem;
  line-height: 1;

  @media all and (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.3;
  }
  &:first-of-type {
    margin-top: 5px;
  }
`;
Details.displayName = '--- Details ---';

// export const Flag = styled.img`
//   margin-left: 5px;
//   vertical-align: middle;
// `;
// Flag.displayName = '--- Flag ---';

// export const MoreInfo = styled.p`
//   position: absolute;
//   bottom: 5px;
//   right: 35px;
//   font-size: 0.8rem;

//   @media all and (min-width: 321px) {
//     bottom: 15px;
//     font-size: 1rem;
//   }
// `;
// MoreInfo.displayName = '--- More Info ---';

// export const Link = styled.a`
//   margin-left: 5px;
//   vertical-align: super;
// `;
// Link.displayName = '--- Link ---';
