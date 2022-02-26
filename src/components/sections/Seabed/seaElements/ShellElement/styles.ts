import styled, { keyframes } from 'styled-components';

export const TheShell = styled.img`
  width: 60px;
  opacity: 0.5;
  filter: drop-shadow(0 5px 2px rgba(0, 0, 0, 0.2));
`;
TheShell.displayName = 'TheShell';

export const ShellContainer = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 30px;
  left: 15vw;
`;
ShellContainer.displayName = 'ShellContainer';

export const PearlShine = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 100%, rgb(220, 220, 220), white);
  box-shadow: 0 0 10px 1px white;
`;
PearlShine.displayName = 'PearlShine';

const Shine = keyframes`
0% {
    box-shadow: 0 0 20px 4px yellow;
  }

  50% {
        box-shadow: none;
  }

  100% {
        box-shadow: 0 0 20px 4px yellow;
  }
`;

export const Pearl = styled.div`
  position: absolute;
  bottom: 14px;
  left: 23px;
  height: 15px;
  width: 15px;
  background: radial-gradient(
    circle at 100%,
    rgb(220, 220, 220),
    rgb(192, 192, 192) 50%,
    rgb(255, 255, 255) 75%,
    rgb(220, 220, 220) 15%
  );
  border-radius: 50%;
  filter: drop-shadow(0 5px 2px rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(92, 92, 92, 0.3);

  animation-name: ${Shine};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;
Pearl.displayName = 'Pearl';
