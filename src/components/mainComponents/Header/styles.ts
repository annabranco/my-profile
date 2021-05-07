import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { ILanguageCode } from '../../../types/interfaces';
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
  text-transform: uppercase;
  font-size: 1.2rem;

  @media all and (min-width: 500px) {
    text-transform: unset;
    order: 2;
    font-size: 1rem;
  }
  @media all and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;
AppTitle.displayName = 'AppTitle';

interface FlagProps extends React.ComponentPropsWithoutRef<'div'> {
  lang?: ILanguageCode;
  languageSelected: ILanguageCode;
}

export const Flag = styled.div<FlagProps>`
  display: inline;
  margin: 0 5px;
  outline: none;
  opacity: 0.3;
  cursor: pointer;
  max-width: 32px;

  ${({ lang, languageSelected }) =>
    lang === languageSelected &&
    css`
      ${activeFlag}
    `}

  @media all and (min-width: 768px) {
    margin: 0 10px;
  }
`;
Flag.displayName = 'Flag';

export const HeaderArea = styled.header`
  z-index: 50;
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
  width: 100vw;
  padding: 0 20px;

  @media all and (min-width: 500px) {
    flex-wrap: nowrap;
    padding: 0 80px;
  }
`;
HeaderArea.displayName = 'Header';

export const LanguagesWrapper = styled.div`
  ${headerInner}
  order: 2;
  height: 20px;

  @media all and (min-width: 500px) {
    order: 1;
  }
`;
LanguagesWrapper.displayName = 'LanguagesWrapper';

export const Version = styled.p`
  display: none;
  ${headerInner}
  font-family: ${fontTitle};
  order: 3;

  @media all and (min-width: 768px) {
    display: block;
  }
`;
Version.displayName = 'Version';
