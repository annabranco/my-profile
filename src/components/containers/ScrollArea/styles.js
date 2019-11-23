import styled, { css } from 'styled-components';

export const ScrollAreaWrapper = styled.div`
  height: 100vh;
  overflow: scroll;

  ${props =>
    props.languageModalIsVisible &&
    css`
      overflow-y: hidden;
    `}
`;
