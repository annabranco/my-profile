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

		} else {

			this.setState({ opened: false });
			document.querySelector('.section__experiences').classList.remove('opened');
			document.querySelector('.seabed__go--otherSkills').classList.remove('hidden');
		}
	}

	render () {

		const text = this.props.texts.Formation;
		const language = this.props.language;

		return (
			<React.Fragment>

				{!this.state.read ?
					<React.Fragment>
						<p className="experiences__find">You find something laying on the sea bed.</p>
						<p className="experiences__find">Click on in to investigate it.</p>
					</React.Fragment>
				: null
				}


				<section className="section__experiences" onClick={this.open}>
					{!this.state.opened ?
						<React.Fragment>
							<p className="experiences__text-fake">- - --</p>
							<p className="experiences__text-fake">- -- -</p>
							<p className="experiences__text-fake">--- --</p>
							<p className="experiences__text-fake">-- - -</p>
						</React.Fragment>
					:
					<div className="experiences__outer">
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
								<h2 className="experiences__title">ICT Instructor</h2>
								<p className="experiences__details">Servicios Profesionales Sociales, Madrid.
									<img className="experiences__flag" src="https://www.countryflags.io/es/flat/16.png" alt={text[language].spain} title={text[language].spain} />
								</p>
								<p className="experiences__details">I gave classes on Information and Communication Technology skills: windows environment, basic software use and internet.
	Teaching more than 210 kids of Primary Education, from 6 up to 12 years old.</p>
							</div>
							<div className="experiences__inner--horizontalBar">
								<div className="experiences__horizontarBar-ir"></div>
								<h2 className="experiences__title">International Emergency Response Delegate (ERU)</h2>
								<p className="experiences__details">Cruz Roja Española
									<img className="experiences__flag" src="https://www.countryflags.io/es/flat/16.png" alt={text[language].spain} title={text[language].spain}  />
								</p>
								<p className="experiences__details">I was deployed in Greece on a temporary mission (2 months), providing psychosocial support for Syrian people and other refugees arriving in Europe.</p>

							</div>
							<div className="experiences__inner--horizontalBar">
								<div className="experiences__horizontarBar-master"></div>
								<h2 className="experiences__title">Public Servant</h2>
								<p className="experiences__details">Tribunal de Justiça do Estado do Rio de Janeiro <img className="experiences__flag" src="https://www.countryflags.io/br/flat/16.png" alt={text[language].brazil} title={text[language].brazil}  />
								</p>
								<p className="experiences__details">Public servant with a rising carreer beginning as administrative technician coming to head of sector responsible for social projects.</p>

							</div>

						</div>
						<p className="experiences__more">For more details ans references, please visit <a className="experiences__social--link" href="https://www.linkedin.com/in/annabranco/" target="_Blank" rel="noopener noreferrer">
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
