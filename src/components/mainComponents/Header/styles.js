import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorGrayNormal,
  colorWhite,
  fontTitleAlt,
  fontTitle
} from '../../../styles/theme';

const headerInner = css`
  min-width: 250px;
  text-align: center;
`;

const activeFlag = css`
  opacity: 1;
  cursor: default;
`;

export const AppTitle = styled.h2`
  ${headerInner}
  order  : 1;
  height: 20px;
  font-family: ${fontTitleAlt};

  @media all and (min-width: 500px) {
    order: 2;
  }
`;
AppTitle.displayName = 'AppTitle';

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
`;
Flag.displayName = 'Flag';

export const HeaderArea = styled.header`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(
    ${colorGrayNormal},
    ${rgba(colorWhite, 0.6)} 50%
  );
  height: 40px;
  width: 100%;
  padding: 0 80px;

  @media all and (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;
HeaderArea.displayName = 'Header';

export const LanguagesWrapper = styled.div`
  ${headerInner}
  order: 3;
  height: 20px;
  @media all and (min-width: 500px) {
    order: 1;
  }
`;
LanguagesWrapper.displayName = 'LanguagesWrapper';

export const Version = styled.p`
  ${headerInner}
  font-family: ${fontTitle};
  order: 3;
`;
Version.displayName = 'Version';
