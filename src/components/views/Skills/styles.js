import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorGreenBright,
  colorWhite,
  colorBlack,
  colorBlueWater,
  fontTitleAlt,
  fontTitle
} from '../../../styles/theme';

export const Sidebar = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    ${props => `${(props.width - 80) / 4 - 20}px`}
  );
  grid-gap: 20px;
  border-radius: 30px;
  background-image: linear-gradient(
    ${rgba(colorGreenBright, 0.1)},
    ${rgba(colorWhite, 0.2)}
  );
  height: 600px;
  width: ${props => props.width};
  padding: 15px 40px 80px;

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

export const SkillGroupTitle = styled.h3`
  border: 1px solid ${colorBlack};
  border-radius: 10px 0;
  margin: 20px 0 15px;
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-gap: 20px;
`;

export const SkillGroup = styled.div`
  /* position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  ${props =>
    props.group === 'Frontend' &&
    css`
      grid-column: span 4;
    `}
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
`;

export const SkillName = styled.h4`
  margin-bottom: 5px;
  font-family: ${fontTitle};
  font-size: 1rem;
  font-weight: bold;
  color: ${colorBlack};
`;
