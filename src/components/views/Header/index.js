import React from 'react';
import PropTypes from 'prop-types';
import { headerTextPropType, languagesPropType } from '../../../types/index';
import {
  HeaderWrapper,
  LanguagesWrapper,
  Flag,
  HeaderTitle,
  VersionInfo
} from './styles';

const Header = ({
  languages,
  texts,
  language,
  onChangeLanguage,
  APP_VERSION
}) => (
  <HeaderWrapper>
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
    <HeaderTitle>{texts.title}</HeaderTitle>
    <VersionInfo>{APP_VERSION}</VersionInfo>
  </HeaderWrapper>
);

Header.propTypes = {
  texts: headerTextPropType.isRequired,
  language: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  APP_VERSION: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(languagesPropType).isRequired
};

export default Header;
