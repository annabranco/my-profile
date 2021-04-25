import styled, { css } from 'styled-components';

interface FrontendGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
}

export const FrontendGroup = styled.div<FrontendGroupProps>`
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
FrontendGroup.displayName = 'Frontend Group';

interface LogoProps extends React.ComponentPropsWithoutRef<'img'> {
  name?: string;
}

export const Logo = styled.img<LogoProps>`
  height: 120%;

  &.icon--react {
    height: 30px;
  }
  ${({ name }) =>
    name === 'React' &&
    css`
      height: 130%;
      transform: translate(0, -2px);
    `}
  @media all and (min-width: 768px) {
    height: 100%;
    font-size: 3.5rem;

    ${({ name }) =>
      name === 'React' &&
      css`
        height: 120%;
        transform: translate(0, -2px);
      `}
  }
`;
Logo.displayName = 'Logo';

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 60px;

  @media all and (min-width: 768px) {
    height: 68px;
  }
`;
LogoWrapper.displayName = 'Logo Wrapper';

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
SkillsWrapper.displayName = 'Skills Wrapper';
