import React, { Component } from 'react';

export class Header extends Component {
  render() {
    const text = this.props.texts.Header;
    const language = this.props.language;

    return (
      <header className="header__outer">
        <div className="header__inner header__inner--languages">
          <img
            className={`header__flags ${
              language === 'en' ? 'header__flags--active' : ''
            }`}
            src="https://www.countryflags.io/us/flat/16.png"
            lang="en"
            onClick={this.props.changeLanguage}
            alt="English"
          />
          <img
            className={`header__flags ${
              language === 'es' ? 'header__flags--active' : ''
            }`}
            src="https://www.countryflags.io/es/flat/16.png"
            lang="es"
            onClick={this.props.changeLanguage}
            alt="Español"
          />
          <img
            className={`header__flags ${
              language === 'pt' ? 'header__flags--active' : ''
            }`}
            src="https://www.countryflags.io/br/flat/16.png"
            lang="pt"
            onClick={this.props.changeLanguage}
            alt="Português"
          />
          <img
            className={`header__flags hidden ${
              language === 'fr' ? 'header__flags--active' : ''
            }`}
            src="https://www.countryflags.io/fr/flat/16.png"
            lang="fr"
            onClick={this.props.changeLanguage}
            alt="Français"
          />
        </div>
        <div className="header__inner header__inner--title">
          <p className="header__text">{text[language].title}</p>
        </div>
        <div className="header__inner header__inner--version">
          <p className="header__text">v0.8.2</p>
          <p className="header__text-contact hidden">
            {text[language].contact}
          </p>
        </div>
      </header>
    );
  }
}
