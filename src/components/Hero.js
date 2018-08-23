import React from 'react';
import Social from './Social';
import '../styles/components/Hero.css';
import Mugshot from '../images/annabranco.png';


class Hero extends React.Component {

	render () {

		const text = this.props.texts.Hero;
		const language = this.props.language;

		return (

			<section className="section__hero container">

				<div className="row">
					<div className="hero__left col-3">
						<div className="hero__photo">
							<img src={Mugshot} alt="Anna Branco" className="hero__mugshot"/>
						</div>
					</div>
					<div className="hero__center col-6">
						<div className="hero__id">
							<h1 className="hero__name">Anna Branco</h1>
							<h2 className="hero__job">{text[language].job}</h2>
						</div>
						<div className="hero__aditional">{text[language].aditional}</div>
					</div>
					<div className="hero__right col-3">
						<Social
							text={text}
							language={this.props.language}
						/>
					</div>
				</div>
				<div className="hero__scrollDown">
					<div className="hero__scrollDown-inner">
						<i class="fas fa-angle-double-down scroll-icon anim1"></i>
						<i class="fas fa-angle-double-down scroll-icon anim1"></i>
						<i class="fas fa-angle-double-down scroll-icon anim1"></i>
					</div>
					<div className="hero__scrollDown-inner">
						<i class="fas fa-angle-double-down scroll-icon anim2"></i>
						<i class="fas fa-angle-double-down scroll-icon anim2"></i>
						<i class="fas fa-angle-double-down scroll-icon anim2"></i>
					</div>
					<div className="hero__scrollDown-inner">
						<i class="fas fa-angle-double-down scroll-icon anim3"></i>
						<i class="fas fa-angle-double-down scroll-icon anim3"></i>
						<i class="fas fa-angle-double-down scroll-icon anim3"></i>
					</div>

				</div>

			</section>

		);
	}

}

export default Hero;
