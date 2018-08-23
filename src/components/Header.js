import React from 'react';
import '../styles/components/Header.css';


class Header extends React.Component {

  render () {

		const text = this.props.texts.Header;
		const language = this.props.language;

    return (

      <header className="header__outer">
				<div className="header__inner">
					<img className={`header__flags ${language === 'en' ? 'header__flags--active' : ''}`} src="https://www.countryflags.io/us/flat/16.png" lang="en" onClick={this.props.changeLanguage} />
					<img className={`header__flags ${language === 'es' ? 'header__flags--active' : ''}`} src="https://www.countryflags.io/es/flat/16.png" lang="es" onClick={this.props.changeLanguage} />
					<img className={`header__flags ${language === 'pt' ? 'header__flags--active' : ''}`} src="https://www.countryflags.io/br/flat/16.png" lang="pt" onClick={this.props.changeLanguage} />
					<img className={`header__flags hidden ${language === 'fr' ? 'header__flags--active' : ''}`} src="https://www.countryflags.io/fr/flat/16.png" lang="fr" onClick={this.props.changeLanguage}/>
				</div>
				<div className="header__inner">
	  			<p className="header__text">{text[language].title}</p>
				</div>
				<div className="header__inner">
					<p className="header__text-contact">{text[language].contact}</p>
				</div>
  		</header>

    );
  }

}

export default Header;
