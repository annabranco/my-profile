import React from 'react';

export const Header = ({ texts, onChangeLanguage }) => {
  let languageSelected;
  switch (texts.language) {
    case 'Español':
      languageSelected = 'es';
      break;
    case 'Português':
      languageSelected = 'pt';
      break;
    case 'Français':
      languageSelected = 'fr';
      break;
    default:
      languageSelected = 'en';
      break;
  }

  return (
    <header className="header__outer">
      <div className="header__inner header__inner--languages">
        <img
          className={`header__flags ${
            languageSelected === 'en' ? 'header__flags--active' : ''
          }`}
          src="https://www.countryflags.io/us/flat/16.png"
          lang="en"
          onClick={onChangeLanguage}
          alt="English"
        />
        <img
          className={`header__flags ${
            languageSelected === 'es' ? 'header__flags--active' : ''
          }`}
          src="https://www.countryflags.io/es/flat/16.png"
          lang="es"
          onClick={onChangeLanguage}
          alt="Español"
        />
        <img
          className={`header__flags ${
            languageSelected === 'pt' ? 'header__flags--active' : ''
          }`}
          src="https://www.countryflags.io/br/flat/16.png"
          lang="pt"
          onClick={onChangeLanguage}
          alt="Português"
        />
        <img
          className={`header__flags hidden ${
            languageSelected === 'fr' ? 'header__flags--active' : ''
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
        <p className="header__text">v0.8.2</p>
        <p className="header__text-contact hidden">{texts.contact}</p>
      </div>
    </header>
  );
};

// export default Header;
