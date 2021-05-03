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
  scroll-snap-type: y proximity;

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

interface ScrollSectionElementProps
  extends React.ComponentPropsWithoutRef<'div'> {
  last: boolean;
}

export const ScrollSectionElement = styled.div<ScrollSectionElementProps>`
  scroll-snap-align: ${({ last }) => last && 'end'};
`;
ScrollSectionElement.displayName = 'ScrollSectionElement';
