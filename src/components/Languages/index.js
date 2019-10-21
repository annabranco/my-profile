import React, { Component } from 'react';

export class Languages extends Component {
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
    this.props.clearLanguagePopup(this.state.doNotShowLanguagePopupAgain);
  };

  frenchSelected = () => {
    this.setState({ frenchClicked: true });
    setTimeout(() => {
      this.setState({ frenchClicked: false });
    }, 5000);
  };

  render() {
    const text = this.props.texts.Languages;
    const language = this.props.language;

    return (
      <React.Fragment>
        {this.state.display && (
          <div className="languages__outer">
            <p className="languages__text">
              {this.state.frenchClicked ? '' : text[language].readingLanguage}
            </p>
            <p className="languages__text languages__text-warning">
              {this.state.frenchClicked
                ? "Je suis désolée mais le français n'est pas encore implementé."
                : text[language].changeDefault}
            </p>

            <div className="languages__flags--outer">
              <div
                className="languages__flags--inner"
                lang="en"
                onClick={this.props.changeLanguage}
              >
                <p className="languages__label">{text.en.language}</p>
                <img
                  className={`languages__flag ${
                    language === 'en' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/us/shiny/64.png"
                  alt=""
                />
              </div>

              <div
                className="languages__flags--inner"
                lang="es"
                onClick={this.props.changeLanguage}
              >
                <p className="languages__label">{text.es.language}</p>
                <img
                  className={`languages__flag ${
                    language === 'es' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/es/shiny/64.png"
                  alt=""
                />
              </div>

              <div
                className="languages__flags--inner"
                lang="pt"
                onClick={this.props.changeLanguage}
              >
                <p className="languages__label">{text.pt.language}</p>
                <img
                  className={`languages__flag ${
                    language === 'pt' ? 'languages__flag--active' : ''
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
                <p className="languages__label notYet">{text.fr.language}</p>
                <img
                  className={`languages__flag notYet ${
                    language === 'en' ? 'languages__flag--active' : ''
                  }`}
                  src="https://www.countryflags.io/fr/shiny/64.png"
                  alt=""
                />
              </div>
            </div>

            <p className="languages__text">{text[language].changeUpperBar}</p>
            <p className="languages__text languages__text--checkbox">
              <input
                type="checkbox"
                className="languages__checkbox"
                onClick={this.handleShowLanguagePopupAgain}
                defaultChecked
              />
              {text[language].chekboxText}
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
