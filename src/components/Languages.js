import React from 'react';
import '../styles/components/Languages.css';

const texts = {
  en: {
    line1: 'You are reading my professional profile in English.',
    line2: 'Click below to change your default language:',
		line3: 'You may also change it in the upper bar',
		line4: 'Do not show me this message again.'
  },
  es: {
    line1: 'Usted está leyendo mi perfil profesional en español.',
    line2: 'Haga click abajo para cambiar su idioma predeterminado:',
		line3: 'Usted también puede cambiarlo en la barra superior',
		line4: 'No enseñar esta mensaje otra vez.'
  },
  pt: {
    line1: 'Você está lendo meu perfil profissional em português.',
    line2: 'Clique abaixo para mudar o seu idioma padrão:',
		line3: 'Você também pode mudá-lo na barra superior',
		line4: 'Não mostrar essa mensagem novamente.'
  },
  fr: {
    line1: 'Vous lisez mon profil professionel en français.',
    line2: 'Cliquez ci-dessous pour changer votre langue par défaut:',
		line3: 'Vous pouvez aussi le changer dans la barre supérieure',
		line4: 'Ne plus afficher ce message.'
  }
}

class Languages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
     	display: true,
		frenchClicked: false,
		doNotShowLanguagePopupAgain: true
    }
  }

	handleShowLanguagePopupAgain = (e) => {
		if (e.currentTarget.checked) {
			this.setState({ doNotShowLanguagePopupAgain: true });
		} else {
			this.setState({ doNotShowLanguagePopupAgain: false });
		}
	}

  closeDisplay = () => {
		this.setState({ display: false });
		this.props.clearLanguagePopup(this.state.doNotShowLanguagePopupAgain);
	}

	frenchSelected = () => {
			this.setState({ frenchClicked: true });
			setTimeout(() => {
				this.setState({ frenchClicked: false })
			},5000);
	}


  render () {

const language = this.props.language;

    return (
<React.Fragment>

      {this.state.display && (

        <div className="languages__outer">
          <p className="languages__text">{this.state.frenchClicked ? "" : texts[language].line1}</p>
          <p className="languages__text languages__text-warning">{this.state.frenchClicked ? "Je suis désolée mais le français n'est pas encore implementé." : texts[language].line2}</p>

          <div className="languages__flags--outer">

            <div className="languages__flags--inner" lang="en" onClick={this.props.changeLanguage}>
              <p className="languages__label">English (US)</p>
              <img className={`languages__flag ${language === 'en' ? 'languages__flag--active' : ''}`} src="https://www.countryflags.io/us/shiny/64.png" alt="" />
            </div>

            <div className="languages__flags--inner" lang="es" onClick={this.props.changeLanguage}>
              <p className="languages__label">Español (ES)</p>
              <img className={`languages__flag ${language === 'es' ? 'languages__flag--active' : ''}`} src="https://www.countryflags.io/es/shiny/64.png" alt="" />
            </div>

            <div className="languages__flags--inner" lang="pt" onClick={this.props.changeLanguage}>
              <p className="languages__label">Português (BR)</p>
              <img className={`languages__flag ${language === 'pt' ? 'languages__flag--active' : ''}`} src="https://www.countryflags.io/br/shiny/64.png" alt="" />
            </div>

            <div className="languages__flags--inner" lang="fr" onClick={this.frenchSelected}>
              <p className="languages__label notYet">Français (FR)</p>
              <img className={`languages__flag notYet ${language === 'en' ? 'languages__flag--active' : ''}`} src="https://www.countryflags.io/fr/shiny/64.png" alt="" />
            </div>

          </div>

					<p className="languages__text">{texts[language].line3}</p>
					<p className="languages__text languages__text--checkbox">
						<input type="checkbox" className="languages__checkbox" onClick={this.handleShowLanguagePopupAgain} defaultChecked />{texts[language].line4}
					</p>
					<button className="languages__close" onClick={this.closeDisplay}>ok</button>

        </div>
      )}

      </React.Fragment>


    );

  }

}

export default Languages;
