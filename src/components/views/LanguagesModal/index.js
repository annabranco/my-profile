import React, { Component } from 'react';

export class LanguagesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true,
      frenchClicked: false,
      doNotShowLanguagePopupAgain: true
    };
  }

  handleShowLanguagePopupAgain = e => {
    if (e.currentTarget.checked) {
      this.setState({ doNotShowLanguagePopupAgain: true });
    } else {
      this.setState({ doNotShowLanguagePopupAgain: false });
    }
  };

  closeDisplay = () => {
    this.setState({ display: false });
    this.props.closeLanguagePopup(this.state.doNotShowLanguagePopupAgain);
  };

  frenchSelected = () => {
    this.setState({ frenchClicked: true });
    setTimeout(() => {
      this.setState({ frenchClicked: false });
    }, 5000);
  };

  render() {
    const { frenchClicked, display } = this.state;
    const { texts, onChangeLanguage, language } = this.props;

    return (
      <React.Fragment>
        {display && (
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
              >
                <p className="languages__label">English</p>
                <img
                  className={`languages__flag ${
                    language === 'English' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/us/shiny/64.png"
                  alt=""
                />
              </div>

              <div
                className="languages__flags--inner"
                lang="es"
                onClick={onChangeLanguage}
              >
                <p className="languages__label">Español</p>
                <img
                  className={`languages__flag ${
                    language === 'Español' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/es/shiny/64.png"
                  alt=""
                />
              </div>

              <div
                className="languages__flags--inner"
                lang="pt"
                onClick={onChangeLanguage}
              >
                <p className="languages__label">Português</p>
                <img
                  className={`languages__flag ${
                    language === 'Português' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/br/shiny/64.png"
                  alt=""
                />
              </div>

              <div
                className="languages__flags--inner"
                lang="fr"
                onClick={this.frenchSelected}
              >
                <p className="languages__label notYet">Français</p>
                <img
                  className={`languages__flag notYet ${
                    language === 'Français' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/fr/shiny/64.png"
                  alt=""
                />
              </div>
            </div>

            <p className="languages__text">{texts.changeUpperBar}</p>
            <p className="languages__text languages__text--checkbox">
              <input
                type="checkbox"
                className="languages__checkbox"
                onClick={this.handleShowLanguagePopupAgain}
                defaultChecked
              />
              {texts.chekboxText}
            </p>
            <button className="languages__close" onClick={this.closeDisplay}>
              ok
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
