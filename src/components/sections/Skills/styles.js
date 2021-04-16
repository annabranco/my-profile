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
import { isDesktop } from '../../../utils/device';

export const Logo = styled.img`
  margin: 0 auto;
  height: 30%;
  width: 30%;
`;
Logo.displayName = 'Logo';

export const Name = styled.h4`
  margin-bottom: 5px;
  font-family: ${fontTitle};
  font-size: 1rem;
  font-weight: bold;
  color: ${colorBlack};
`;
Name.displayName = 'Name';

export const SkillsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  grid-gap: 20px 5px;
  border-radius: 30px;
  background-image: linear-gradient(
    ${rgba(colorGreenBright, 0.1)},
    ${rgba(colorWhite, 0.2)}
  );
  height: 100%;
  width: 100vw;
  padding: 45px 40px 80px;
  overflow: hidden;

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(4, calc(100% / 4 - 15px));
    grid-gap: 20px;
    height: 600px;
    width: 90vw;
    transition: all ease 2s;
  }
`;
SkillsArea.displayName = 'Skills Area';

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 60px);
    grid-gap: 20px;
  }
`;
SkillsGrid.displayName = 'Skills Grid';

export const SkillGroup = styled.div`
  max-width: 280px;
  border-radius: 10%;
  opacity: 0;

  &:hover {
    background: ${rgba(colorYellowBright, 0.1)};
  }
  transition: transform 2s ease, opacity 1s ease;

  ${({ position }) => {
    if (position === 1 || position === 5) {
      return css`
        transform: translate(-300px, 200px) rotate(64deg);
      `;
    }
    if (position === 2 || position === 6) {
      return css`
        transform: translate(-300px, 500px) rotate(10deg);
      `;
    }
    if (position === 3 || position === 7) {
      return css`
        transform: translate(300px, 500px) rotate(-10deg);
      `;
    }
    if (position === 4 || position === 8) {
      return css`
        transform: translate(300px, 200px) rotate(-40deg);
      `;
    }
    return null;
  }};

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translate(0, 0);

      margin-top: 0;
      opacity: 1;
    `}

  @media all and (min-width: 768px) {
    margin: 20px 0 10px;
    padding-bottom: 10px;
  }
`;
SkillGroup.displayName = 'Skill Group';

export const SkillsInsideGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;
SkillsInsideGroup.displayName = 'Skills Inside Group';

export const SkillItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;

  ${({ isLastElementAlone }) =>
    isDesktop &&
    isLastElementAlone &&
    css`
      &:last-of-type {
        grid-column: span 2;
      }
    `}
`;
SkillItem.displayName = 'Skill Item';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colorBlack};
  border-radius: 10px 0;
  margin: 0 auto 15px;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.2)},
    ${rgba(colorBlueWater, 0.5)}
  );
  min-height: ${({ group }) =>
    !isDesktop && group !== 'Frontend' ? '60px' : 'auto'};
  width: 100%;
  padding: 5px 0;
  text-decoration: none;
  font-family: ${fontTitleAlt};
  text-align: center;
`;
Title.displayName = 'Title';
