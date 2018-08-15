import React from 'react';
import '../styles/components/Languages.css';

const texts = {
  en: {
    line1: 'You are reading my profile in English.',
    line2: 'Click below to change your default language:'
  },
  es: {
    line1: 'Usted está leyendo mi perfil en español.',
    line2: 'Haga click abajo para cambiar su idioma predeterminado:'
  },
  pt: {
    line1: 'Você está lendo meu perfil em português.',
    line2: 'Clique abaixo para mudar o seu idioma padrão:'
  },
  fr: {
    line1: 'Vous lisez mon profil en français.',
    line2: 'Cliquez ci-dessous pour changer votre langue par défaut:'
  }
}



class Languages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      display: true
    }

  }

  closeDisplay = () => this.setState({ display: false })

  render () {

const showDisplay = this.state.display;

    return (
<React.Fragment>

      {this.state.display && (

        <div className="languages__outer">
          <p className="languages__close" onClick={this.closeDisplay}>x</p>
          <p className="languages__text">{texts[this.props.language].line1}</p>
          <p className="languages__text">{texts[this.props.language].line2}</p>

          <div className="languages__flags--outer">

            <div className="languages__flags--inner" id="en" onClick={this.props.changeLanguage}>
              <p className="languages__label">English (US)</p>
              <img className="languages__flag" src="https://www.countryflags.io/us/shiny/64.png" />
            </div>

            <div className="languages__flags--inner" id="es" onClick={this.props.changeLanguage}>
              <p className="languages__label">Español (ES)</p>
              <img className="languages__flag" src="https://www.countryflags.io/es/shiny/64.png" />
            </div>

            <div className="languages__flags--inner" id="pt" onClick={this.props.changeLanguage}>
              <p className="languages__label">Português (BR)</p>
              <img className="languages__flag" src="https://www.countryflags.io/br/shiny/64.png" />
            </div>

            <div className="languages__flags--inner" id="fr" onClick={this.props.changeLanguage}>
              <p className="languages__label">Français (FR)</p>
              <img className="languages__flag" src="https://www.countryflags.io/fr/shiny/64.png" />
            </div>
          </div>


        </div>
      )}

      </React.Fragment>


    );

  }

}

export default Languages;
