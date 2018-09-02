import React from 'react';
import '../styles/components/Experiences.css';

class Experiences extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			opened: false,
			read: false
		}
	}

	open = () => {
		if (!this.state.opened) {

			this.setState({
				opened: true,
				read: true
			 });
			document.querySelector('.section__experiences').classList.add('opened');
			this.props.markAsRead();
		}
	}

	close = () => {
		this.setState({ opened: false });
		document.querySelector('.section__experiences').classList.remove('opened');
	}

	render () {

		const text = this.props.texts.Experiences;
		const language = this.props.language;

		return (
			<React.Fragment>

				{!this.props.viewedExperiences && !this.state.read ?
					<React.Fragment>
						<p className="seabed__findSomething">{text[language].find}</p>
						<p className="seabed__findSomething">{text[language].investigate}</p>
					</React.Fragment>
				: null
				}


				<section className="section__experiences" onClick={this.open}>
					{!this.state.opened ?
						<React.Fragment>
							<p className="experiences__text-fake">- - --- - --</p>
							<p className="experiences__text-fake">- -- -- - --</p>
							<p className="experiences__text-fake">- -- ---- --</p>
							<p className="experiences__text-fake">- - - --- --</p>
						</React.Fragment>
					:
					<div className="experiences__outer">
						<button className="seabed__click2close" onClick={this.close}>{this.props.texts.Seabed[language].click2close}</button>

						<div className="experiences__inner">
							<div className="experiences__inner--year">09/2017 - 05/2018</div>
							<div className="experiences__inner--year">10/2015 - 11/2015</div>
							<div className="experiences__inner--year">05/2005 - 12/2014</div>

						</div>
						<div className="experiences__inner">
							<div className="experiences__verticalBar"></div>
						</div>
						<div className="experiences__inner">
							<div className="experiences__inner--horizontalBar">
								<div className="experiences__horizontarBar-psy"></div>
								<h2 className="experiences__title">{text[language].ict}</h2>
								<p className="experiences__details">Servicios Profesionales Sociales, Madrid.
									<img className="experiences__flag" src="https://www.countryflags.io/es/flat/16.png" alt={text[language].spain} title={text[language].spain} />
								</p>
								<p className="experiences__details">{text[language].ictDetails}</p>
							</div>
							<div className="experiences__inner--horizontalBar">
								<div className="experiences__horizontarBar-ir"></div>
								<h2 className="experiences__title">{text[language].eru}</h2>
								<p className="experiences__details">Cruz Roja Española
									<img className="experiences__flag" src="https://www.countryflags.io/es/flat/16.png" alt={text[language].spain} title={text[language].spain}  />
								</p>
								<p className="experiences__details">{text[language].eruDetails}</p>

							</div>
							<div className="experiences__inner--horizontalBar">
								<div className="experiences__horizontarBar-master"></div>
								<h2 className="experiences__title">{text[language].tj}</h2>
								<p className="experiences__details">Tribunal de Justiça do Estado do Rio de Janeiro <img className="experiences__flag" src="https://www.countryflags.io/br/flat/16.png" alt={text[language].brazil} title={text[language].brazil}  />
								</p>
								<p className="experiences__details">{text[language].tjDetails}</p>

							</div>

						</div>
						<p className="experiences__more">{text[language].linkedin}<a className="experiences__social--link" href="https://www.linkedin.com/in/annabranco/" target="_Blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin-in icon-linkedin"></i>
							</a>
						</p>
					</div>
					}
				</section>

			</React.Fragment>

		);
	}

}

export default Experiences;
