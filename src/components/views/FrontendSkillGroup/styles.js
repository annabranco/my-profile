import styled from 'styled-components';

export const FrontendSkillWrapper = styled.div`
  grid-column: span 4;
`;

export const FrontendSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const FrondendSkillsLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 60px;
`;

export const FrondendSkillsLogo = styled.img`
  height: 100%;
  font-size: 3.5rem;

  &.icon--react {
    height: 60px;
  }
`;
