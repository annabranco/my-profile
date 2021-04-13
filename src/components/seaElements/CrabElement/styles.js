import styled, { css } from 'styled-components';

export const TheCrab = styled.img`
  position: absolute;
  bottom: 30px;
  right: 50%;
  transform: translate(50%, 0);
  width: 60px;
  opacity: 0.5;
  filter: drop-shadow(0 5px 2px rgba(0, 0, 0, 0.2));
  transition: all 3s ease-in;

  ${({ runnaway }) =>
    runnaway &&
    css`
      right: -10vw;
      transform: none1;
      transition: all 4s ease-out;
    `}
`;
TheCrab.displayName = 'TheCrab';
