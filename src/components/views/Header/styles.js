import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(#afa5b9, rgba(#ffffff, 0.8));
  height: 40px;
  width: 100vw;
  padding: 0 80px;

  @media all and (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

const headerInner = css`
  min-width: 250px;
  text-align: center;
`;

export const LanguagesWrapper = styled.div`
  ${headerInner}
  order: 3;
  height: 20px;
  @media all and (min-width: 500px) {
    order: 1;
  }
`;

const activeFlag = css`
  opacity: 1;
  cursor: default;
`;

export const Flag = styled.div`
  display: inline;
  margin: 0 10px;
  outline: none;
  opacity: 0.3;
  cursor: pointer;

  ${props =>
    props.lang === props.languageSelected &&
    css`
      ${activeFlag}
    `}

  ${props =>
    !props.active &&
    css`
      display: none;
    `}
`;

export const HeaderTitle = styled.h2`
  ${headerInner}
  order  : 1;
  height: 20px;
  font-family: var(--font__title);

  @media all and (min-width: 500px) {
    order: 2;
  }
`;

export const VersionInfo = styled.p`
  ${headerInner}
  font-family: var(--font__title);
  order: 3;
`;
