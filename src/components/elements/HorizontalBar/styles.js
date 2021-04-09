import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { colorBlueLight } from '../../../styles/theme';
import { Hidden } from '../../../styles/global';

export const HorizontalBar = styled.div`
  position: absolute;
  display: inline-block;
  border-top: 5px solid ${rgba(colorBlueLight, 0.3)};
  transition: all 10s ease;

  ${({ border = '5px' }) =>
    css`
      border-top: ${border} solid ${rgba(colorBlueLight, 0.3)};
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ hidden }) =>
    hidden &&
    css`
      ${Hidden}
    `}

  ${({ moveY }) =>
    moveY &&
    css`
      transform: translate(0, ${moveY});
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin-left: ${margin};
    `}

`;
HorizontalBar.displayName = 'Horizontal Bar';
