import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import {
  AppTitle,
  Flag,
  HeaderArea,
  LanguagesWrapper,
  Version
} from './styles';
import { headerTextPropType, languagesPropType } from '../../../types';

const Header = ({
  APP_VERSION,
  language,
  languages,
  onChangeLanguage,
  texts
}) => (
  <HeaderArea>
    <LanguagesWrapper>
      {languages.map(item => (
        <Flag
          active={item.active}
          aria-label={item.language}
          key={item.languageCode}
          lang={item.languageCode}
          languageSelected={language}
          onClick={onChangeLanguage}
          role="button"
          tabIndex={0}
        >
          <img
            alt=""
            src={`https://www.countryflags.io/${item.flagCode}/flat/16.png`}
          />
        </Flag>
      ))}
    </LanguagesWrapper>
    <AppTitle>{texts.title}</AppTitle>
    <Version>{APP_VERSION}</Version>
  </HeaderArea>
);

Header.propTypes = {
  APP_VERSION: string.isRequired,
  language: string.isRequired,
  languages: arrayOf(languagesPropType).isRequired,
  onChangeLanguage: func.isRequired,
  texts: headerTextPropType.isRequired
};

export default Header;
