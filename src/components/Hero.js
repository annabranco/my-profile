import React from 'react';
import Social from './Social';
import '../styles/components/Hero.css';
import Mugshot from '../images/annabranco.png';


class Hero extends React.Component {


	render () {

		const text = this.props.texts.Hero;
		const language = this.props.language;

		return (

			<section className="section__hero">

				<h1 className="hero__name hero__name--devices">Anna Branco</h1>

				<div className="hero__container">

					<div className="hero__photoAndName">
						<div className="hero__photo--container">
							<div className="hero__photo">
								<img src={Mugshot} alt="Anna Branco" className="hero__mugshot"/>
							</div>
						</div>
						<div className="hero__id--container">
							<div className="hero__id">
								<h1 className="hero__name hero__name--desktop">Anna Branco</h1>
								<h2 className="hero__job">{text[language].job}</h2>
							</div>
							<div className="hero__aditional">
							{!this.props.viewedAll ?
								text[language].aditional
								: text[language].thankyou
							}
							</div>
						</div>
					</div>
					<div className="hero__social--container">
						<Social
							text={text}
							language={this.props.language}
						/>
					</div>
				</div>

					<img className="hero__boat" src="http://www.animatedimages.org/data/media/271/animated-ship-image-0031.gif" alt="Navigating beautifully"/>
					<div className="hero__scrollDown">
						<div className="hero__scrollDown-inner">
							<i className="fas fa-angle-double-down scroll-icon anim1"></i>
							<i className="fas fa-angle-double-down scroll-icon anim1"></i>
							<i className="fas fa-angle-double-down scroll-icon anim1"></i>
						</div>
						<div className="hero__scrollDown-inner">
							<i className="fas fa-angle-double-down scroll-icon anim2"></i>
							<i className="fas fa-angle-double-down scroll-icon anim2"></i>
							<i className="fas fa-angle-double-down scroll-icon anim2"></i>
						</div>
						<div className="hero__scrollDown-inner">
							<i className="fas fa-angle-double-down scroll-icon anim3"></i>
							<i className="fas fa-angle-double-down scroll-icon anim3"></i>
							<i className="fas fa-angle-double-down scroll-icon anim3"></i>
						</div>
					</div>
			</section>

		);
	}

}

export default Hero;
