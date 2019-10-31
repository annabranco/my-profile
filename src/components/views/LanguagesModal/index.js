import React from 'react';
import { PropTypes } from 'prop-types';
import { languagesTextPropType } from '../../../types/index';

const LanguagesModal = ({
  frenchClicked,
  texts,
  language,
  onChangeLanguage,
  onCloseLanguageModal,
  onClickFrench,
  handleShowLanguageModalAgain
}) => (
  <div className="background__overlay">
    <div className="languages__outer">
      <p className="languages__text">
        {frenchClicked ? '' : texts.readingLanguage}
      </p>
      <p className="languages__text languages__text-warning">
        {frenchClicked
          ? "Je suis désolée mais le français n'est pas encore implementé."
          : texts.changeDefault}
      </p>

      <div className="languages__flags--outer">
        <div
          className="languages__flags--inner"
          lang="en"
          onClick={onChangeLanguage}
          role="button"
          aria-label="English"
          tabIndex={0}
        >
          <p className="languages__label">English</p>
          <img
            className={`languages__flag ${
              language === 'English' ? 'languages__flag--active' : ''
            }`}
            src="https://www.countryflags.io/us/shiny/64.png"
            alt="en-us"
          />
        </div>

        <div
          className="languages__flags--inner"
          lang="es"
          onClick={onChangeLanguage}
          role="button"
          aria-label="Español"
          tabIndex={0}
        >
          <p className="languages__label">Español</p>
          <img
            className={`languages__flag ${
              language === 'Español' ? 'languages__flag--active' : ''
            }`}
            src="https://www.countryflags.io/es/shiny/64.png"
            alt="es-es"
          />
        </div>

        <div
          className="languages__flags--inner"
          lang="pt"
          onClick={onChangeLanguage}
          role="button"
          aria-label="Português"
          tabIndex={0}
        >
          <p className="languages__label">Português</p>
          <img
            className={`languages__flag ${
              language === 'Português' ? 'languages__flag--active' : ''
            }`}
            src="https://www.countryflags.io/br/shiny/64.png"
            alt="pt-br"
          />
        </div>

        <div
          className="languages__flags--inner"
          lang="fr"
          onClick={onClickFrench}
          role="button"
          aria-label="Français"
          tabIndex={0}
        >
          <p className="languages__label notYet">Français</p>
          <img
            className={`languages__flag notYet ${
              language === 'Français' ? 'languages__flag--active' : ''
            }`}
            src="https://www.countryflags.io/fr/shiny/64.png"
            alt="fr-fr"
          />
        </div>
      </div>

      <p className="languages__text">{texts.changeUpperBar}</p>
      <p className="languages__text languages__text--checkbox">
        <input
          type="checkbox"
          className="languages__checkbox"
          onClick={handleShowLanguageModalAgain}
          defaultChecked
        />
        {texts.chekboxText}
      </p>
      <button
        className="languages__close"
        onClick={onCloseLanguageModal}
        type="button"
      >
        ok
      </button>
    </div>
  </div>
);

LanguagesModal.propTypes = {
  texts: languagesTextPropType.isRequired,
  language: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  onCloseLanguageModal: PropTypes.func.isRequired,
  frenchClicked: PropTypes.bool.isRequired,
  onClickFrench: PropTypes.func.isRequired,
  handleShowLanguageModalAgain: PropTypes.func.isRequired
};

export default LanguagesModal;
