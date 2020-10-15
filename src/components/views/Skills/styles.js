import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorGreenBright,
  colorWhite,
  colorBlack,
  colorBlueWater,
  fontTitleAlt,
  fontTitle,
  colorYellowBright
} from '../../../styles/theme';

export const SectionDeveloper = styled.section`
  position: relative;
  background-position: center;
  height: auto;
  overflow: hidden;
  padding-top: 50px;
`;

export const DeveloperInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const Sidebar = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(4, calc(100% / 4 - 15px));
  grid-gap: 20px;
  border-radius: 30px;
  background-image: linear-gradient(
    ${rgba(colorGreenBright, 0.1)},
    ${rgba(colorWhite, 0.2)}
  );
  height: 600px;
  width: 90vw;
  padding: 15px 40px 80px;
  overflow: hidden;

  @media all and (min-width: 768px) {
    /* opacity: 0; */
    /* transform: translate(0, 100vh); */
    transition: all ease 2s;

    &.comeIn {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export const SkillGroup = styled.div`
  max-width: 280px;
  border-radius: 10%;
  margin: 20px 0 10px;
  padding-bottom: 10px;
  &:hover {
    background: ${rgba(colorYellowBright, 0.1)};
  }
`;

export const SkillGroupTitle = styled.h3`
  border: 1px solid ${colorBlack};
  border-radius: 10px 0;
  margin: 0 0 15px;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.2)},
    ${rgba(colorBlueWater, 0.5)}
  );
  width: 100%;
  padding: 5px 0;
  text-decoration: none;
  font-family: ${fontTitleAlt};
  text-align: center;
`;

export const SkillsList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SkillsLogo = styled.img`
  height: 30%;
  width: 30%;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 60px);
  grid-gap: 20px;
`;

export const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover .skills__inner--stars {
    display: block;
  }

  ${props =>
    props.isLastElementAlone &&
    css`
      &:last-of-type {
        grid-column: span 2;
      }
    `}
`;

export const SkillName = styled.h4`
  margin-bottom: 5px;
  font-family: ${fontTitle};
  font-size: 1rem;
  font-weight: bold;
  color: ${colorBlack};
`;
