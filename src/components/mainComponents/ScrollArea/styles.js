import styled, { css } from 'styled-components';

export const ScrollAreaWrapper = styled.main`
  height: ${`${window.innerHeight}px`};
  overflow: hidden;
  position: absolute;

  ${props =>
    props.langModalVisible &&
    css`
      overflow-y: hidden;
    `}

  @media all and (min-width: 768px) {
    position: unset;
    overflow-y: scroll;
  }
`;
ScrollAreaWrapper.displayName = 'Scroll Area';
