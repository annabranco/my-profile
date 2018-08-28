import React from 'react';
import '../styles/components/Formation.css';

class Formation extends React.Component {

	render () {

		const text = this.props.texts.Formation;
		const language = this.props.language;

		return (

			<section className="section__formation">
				<div className="formation__outer">
					<div className="formation__inner">
						<div className="formation__inner--year">1999 - 2005</div>
						<div className="formation__inner--year">2007 - 2011</div>

						<div className="formation__inner--year">2012 - 2013</div>

						<div className="formation__inner--year">2018</div>

					</div>
					<div className="formation__inner">
						<div className="formation__verticalBar"></div>
					</div>
					<div className="formation__inner">
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-psi"></div>
							<h2 className="formation__title">{text[language].psy}</h2>
							<p className="formation__details">Universidade Gama Filho
								<img className="formation__flag" src="https://www.countryflags.io/br/flat/16.png" alt={text[language].brazil} title={text[language].brazil} />
							</p>
							<p className="formation__details">{text[language].grade}8,46</p>
						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-ri"></div>
							<h2 className="formation__title">{text[language].ir}</h2>
							<p className="formation__details">Universidade Estácio de Sá
								<img className="formation__flag" src="https://www.countryflags.io/br/flat/16.png" alt={text[language].brazil} title={text[language].brazil}  />
							</p>
							<p className="formation__details">{text[language].grade}9,15</p>

						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-master"></div>
							<h2 className="formation__title">{text[language].master}</h2>
							<p className="formation__details">Universitat Autònoma de Barcelona <img className="formation__flag" src="https://www.countryflags.io/es/flat/16.png" alt={text[language].spain} title={text[language].spain}  />
							</p>
							<p className="formation__details">{text[language].grade}8,00</p>

						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-adalab"></div>
							<h2 className="formation__title">Adalab</h2>
						</div>
					</div>

				</div>
			</section>


		);
	}

}

export default Formation;
