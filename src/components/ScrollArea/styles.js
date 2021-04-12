import styled, { css } from 'styled-components';

export const ScrollAreaWrapper = styled.main`
  height: 100vh;
  overflow-y: scroll;

  ${props =>
    props.langModalVisible &&
    css`
      overflow-y: hidden;
    `}
`;
ScrollAreaWrapper.displayName = 'Scroll Area';
