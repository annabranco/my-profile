import React from 'react';
import styled, { css } from 'styled-components';

interface ScrollAreaWrapperProps
  extends React.ComponentPropsWithoutRef<'main'> {
  langModalVisible: boolean;
  isSeabedElementOpened: boolean;
}

export const ScrollAreaWrapper = styled.main<ScrollAreaWrapperProps>`
  height: ${`${window.innerHeight}px`};
  overflow: hidden;
  position: absolute;

  ${({ langModalVisible }) =>
    langModalVisible &&
    css`
      overflow-y: hidden;
    `}

  @media all and (min-width: 768px) {
    position: unset;
    overflow-y: ${({ isSeabedElementOpened }) =>
      isSeabedElementOpened ? 'hidden' : 'scroll'};
  }
`;
ScrollAreaWrapper.displayName = 'Scroll Area';
