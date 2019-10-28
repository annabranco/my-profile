import React from 'react';
import PropTypes from 'prop-types';
import { headerTextPropType } from '../../../types/index';

const Header = ({ texts, language, onChangeLanguage, APP_VERSION }) => (
  <header className="header__outer">
    <div className="header__inner header__inner--languages">
      <div
        className={`header__flags ${
          language === 'en' ? 'header__flags--active' : ''
        }`}
        onClick={onChangeLanguage}
        role="button"
        aria-label="English"
        tabIndex={0}
        lang="en"
      >
        <img src="https://www.countryflags.io/us/flat/16.png" alt="en-us" />
      </div>
      <div
        className={`header__flags ${
          language === 'es' ? 'header__flags--active' : ''
        }`}
        onClick={onChangeLanguage}
        role="button"
        aria-label="Español"
        tabIndex={0}
        lang="es"
      >
        <img src="https://www.countryflags.io/es/flat/16.png" alt="es-es" />
      </div>
      <div
        className={`header__flags ${
          language === 'pt' ? 'header__flags--active' : ''
        }`}
        onClick={onChangeLanguage}
        role="button"
        aria-label="Português"
        tabIndex={0}
        lang="pt"
      >
        <img src="https://www.countryflags.io/br/flat/16.png" alt="pt-br" />
      </div>
      <div
        className={`header__flags hidden ${
          language === 'fr' ? 'header__flags--active' : ''
        }`}
        onClick={onChangeLanguage}
        role="button"
        aria-label="Français"
        tabIndex={0}
        lang="fr"
      >
        <img src="https://www.countryflags.io/fr/flat/16.png" alt="fr-fr" />
      </div>
    </div>
    <div className="header__inner header__inner--title">
      <p className="header__text">{texts.title}</p>
    </div>
    <div className="header__inner header__inner--version">
      <p className="header__text">{APP_VERSION}</p>
      <p className="header__text-contact hidden">{texts.contact}</p>
    </div>
  </header>
);

Header.propTypes = {
  texts: headerTextPropType.isRequired,
  language: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  APP_VERSION: PropTypes.string.isRequired
};

export default Header;
