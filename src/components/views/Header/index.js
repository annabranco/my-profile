import React from 'react';

export const Header = ({ texts, language, onChangeLanguage, APP_VERSION }) => (
  <header className="header__outer">
    <div className="header__inner header__inner--languages">
      <img
        className={`header__flags ${
          language === 'en' ? 'header__flags--active' : ''
        }`}
        src="https://www.countryflags.io/us/flat/16.png"
        lang="en"
        onClick={onChangeLanguage}
        alt="English"
      />
      <img
        className={`header__flags ${
          language === 'es' ? 'header__flags--active' : ''
        }`}
        src="https://www.countryflags.io/es/flat/16.png"
        lang="es"
        onClick={onChangeLanguage}
        alt="Español"
      />
      <img
        className={`header__flags ${
          language === 'pt' ? 'header__flags--active' : ''
        }`}
        src="https://www.countryflags.io/br/flat/16.png"
        lang="pt"
        onClick={onChangeLanguage}
        alt="Português"
      />
      <img
        className={`header__flags hidden ${
          language === 'fr' ? 'header__flags--active' : ''
        }`}
        src="https://www.countryflags.io/fr/flat/16.png"
        lang="fr"
        onClick={onChangeLanguage}
        alt="Français"
      />
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
