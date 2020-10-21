import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import { headerTextPropType, languagesPropType } from '../../../types/index';
import {
  HeaderArea,
  LanguagesWrapper,
  Flag,
  AppTitle,
  Version
} from './styles';

const Header = ({
  languages,
  texts,
  language,
  onChangeLanguage,
  APP_VERSION
}) => (
  <HeaderArea>
    <LanguagesWrapper>
      {languages.map(item => (
        <Flag
          onClick={onChangeLanguage}
          role="button"
          aria-label={item.language}
          tabIndex={0}
          lang={item.languageCode}
          languageSelected={language}
          key={item.languageCode}
          active={item.active}
        >
          <img
            src={`https://www.countryflags.io/${item.flagCode}/flat/16.png`}
            alt=""
          />
        </Flag>
      ))}
    </LanguagesWrapper>
    <AppTitle>{texts.title}</AppTitle>
    <Version>{APP_VERSION}</Version>
  </HeaderArea>
);

Header.propTypes = {
  texts: headerTextPropType.isRequired,
  language: string.isRequired,
  onChangeLanguage: func.isRequired,
  APP_VERSION: string.isRequired,
  languages: arrayOf(languagesPropType).isRequired
};

export default Header;
