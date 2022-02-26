import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { colorBlueLight } from '../../../styles/theme';
import { Hidden } from '../../../styles/global';

interface HorizontalBarProps extends React.ComponentPropsWithoutRef<'div'> {
  border: string;
  formationItems: number;
  hidden?: boolean;
  index: number;
  margin: string;
  moveY: string;
}

export const HorizontalBar = styled.div<HorizontalBarProps>`
  position: absolute;
  display: inline-block;
  border-top: 5px solid ${rgba(colorBlueLight, 0.3)};
  transition: all 10s ease;

  ${({ border = '5px' }) =>
    css`
      border-top: ${border} solid ${rgba(colorBlueLight, 0.3)};
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


      ${({ formationItems, index }) =>
    formationItems &&
    css`
      width: ${`${(40 / formationItems) * ((index + 1) * formationItems)}px`};
    `}

  @media all and (min-width: 768px) {
    ${({ formationItems, index }) =>
      formationItems &&
      css`
        width: ${`${(60 / formationItems) * ((index + 1) * formationItems)}px`};
      `}
  }
`;
HorizontalBar.displayName = 'Horizontal Bar';
