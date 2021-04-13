import styled, { css, keyframes } from 'styled-components';
import { LEFT, RIGHT } from '../../../constants';

const Swimming = comingFrom => keyframes`
0% {
    ${comingFrom}   : -10vw;
  }

  70% {
    ${comingFrom}   : 60vw;
  }

  100% {
    ${comingFrom}   : 110vw;
  }
`;

const SwimmingWaving = (comingFrom, bottom) => keyframes`
  0% {
    ${comingFrom}   : -10vw;
    bottom: ${bottom};
  }
  12%, 29%, 45%, 90% {
   bottom: calc(${bottom} + 5vh);
  }
  65% {
    ${comingFrom}   : 60vw;
   bottom: calc(${bottom} + 5vh);
  }
  20%, 43%, 53%, 83% {
   bottom: calc(${bottom} - 5vh);
  }
  100% {
    ${comingFrom}   : 110vw;
   bottom: ${bottom};
  }
`;

export const Fish = styled.img`
  position: absolute;
  width: 80px;
  bottom: ${({ bottom }) => bottom};
  opacity: 0.4;
  animation-duration: ${({ speed, waving }) => (waving ? '10s' : speed)};
  animation-timing-function: ${({ movementType }) => movementType};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};

  ${({ facing, side, waving, bottom }) => {
    if (side === LEFT) {
      if (facing === LEFT) {
        return css`
          transform: ${waving ? 'rotate(-15deg)' : 'scaleX(-1)'};
          animation-name: ${waving
            ? SwimmingWaving(LEFT, bottom)
            : Swimming(LEFT)};
          left: -10vw;
        `;
      }
      return css`
        animation-name: ${waving
          ? SwimmingWaving(LEFT, bottom)
          : Swimming(LEFT)};
        left: -10vw;
        transform: ${waving ? 'rotate(-15deg)' : 'none'};
      `;
    }
    if (facing === RIGHT) {
      return css`
        transform: ${waving ? 'scaleX(-1) rotate(-15deg)' : 'scaleX(-1)'};
        animation-name: ${waving
          ? SwimmingWaving(RIGHT, bottom)
          : Swimming(RIGHT)};
        right: -10vw;
      `;
    }
    return css`
      animation-name: ${waving
        ? SwimmingWaving(RIGHT, bottom)
        : Swimming(RIGHT)};
      right: -10vw;
      transform: ${waving ? 'scaleX(-1) rotate(-15deg)' : 'none'};
    `;
  }}
`;
Fish.displayName = 'Fish';
