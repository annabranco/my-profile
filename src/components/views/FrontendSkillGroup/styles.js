import styled, { css } from 'styled-components';

export const FrontendGroup = styled.div`
  grid-column: span 4;
  margin-top: 100%;
  opacity: 0;
  transition: margin 3s ease, opacity 3s ease;

  ${({ visible }) =>
    visible &&
    css`
      margin-top: 0;
      opacity: 1;
    `}
`;
FrontendGroup.displayName = '--- Frontend Group ---';

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
SkillsWrapper.displayName = '--- Skills Wrapper ---';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 60px;
`;
LogoWrapper.displayName = '--- Logo Wrapper ---';

export const Logo = styled.img`
  height: 100%;
  font-size: 3.5rem;

  &.icon--react {
    height: 60px;
  }
`;
Logo.displayName = '--- Logo ---';
