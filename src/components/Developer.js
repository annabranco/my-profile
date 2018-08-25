import React from 'react';
import Social from './Social';
import '../styles/components/Developer.css';
import html from '../images/skills/html5.png';
import css from '../images/skills/css3.png';
import javascript from '../images/skills/js.png';
import git from '../images/skills/git.png';
import github from '../images/skills/github.png';
import bootstrap from '../images/skills/bootstrap.png';
import zeplin from '../images/skills/zeplin.png';

class Developer extends React.Component {

	render () {

		const text = this.props.texts.Hero;
		const language = this.props.language;

		return (

			<section className="section__developer">

				<div className="developer__outer container">
					<div className="row">

						<div className="developer__sidebar col-3">
							<h3 className="skills__bar">Main skills</h3>

							<div className="developer__inner--skills">

								<div className="skills__outer">
									<h4 className="skills__text">CSS</h4>
									<img src={css} alt="" className="skills__icon"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">HTML</h4>
									<img src={html} alt="" className="skills__icon"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star-half icon--star"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">JavaScript</h4>
									<img src={javascript} alt="" className="skills__icon"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star-half icon--star"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">SCSS</h4>
									<i class="fab fa-sass skills__icon icon--sass"></i>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star-half icon--star"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">React.js</h4>
									<i class="fab fa-react skills__icon icon--react"></i>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">git</h4>
									<img src={git} alt="" className="skills__icon"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star"></i>
										<i class="fas fa-star icon--star"></i>
									</div>
								</div>

							</div>
							<h3 className="skills__bar">Others skills</h3>
							<div className="developer__inner--skills">

								<div className="skills__outer">
									<h4 className="skills__text--others">gulp</h4>
									<i class="fab fa-gulp skills__icon--others icon--gulp"></i>
									<div className="skills__stars">
										<i class="fas fa-star-half icon--star icon--star--others"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">node.js</h4>
									<i class="fab fa-node-js skills__icon--others icon--node"></i>
									<div className="skills__stars">
										<i class="fas fa-star-half icon--star icon--star--others"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">github</h4>
									<img src={github} alt="" className="skills__icon--others"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star icon--star--others"></i>
										<i class="fas fa-star icon--star icon--star--others"></i>
										<i class="fas fa-star icon--star icon--star--others"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">npm</h4>
									<i class="fab fa-npm skills__icon--others icon--npm"></i>
									<div className="skills__stars">
										<i class="fas fa-star-half icon--star icon--star--others"></i>

									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">bootstrap</h4>
									<img src={bootstrap} alt="" className="skills__icon--others"/>
									<div className="skills__stars">
										<i class="fas fa-star-half icon--star icon--star--others"></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">zeplin</h4>
									<img src={zeplin} alt="" className="skills__icon--others"/>
									<div className="skills__stars">
										<i class="fas fa-star icon--star icon--star--others"></i>
										<i class="fas fa-star icon--star icon--star--others"></i>
									</div>
								</div>

							</div>

						</div>

							<div className="developer__main col-9">
								<div className="hero__id">
									<h1 className="hero__name">Mee Anna Branco</h1>
									<h2 className="hero__job">{text[language].job}</h2>
								</div>
								<div className="developer__proyects">{text[language].aditional}</div>
							</div>
					</div>
				</div>
			</section>


		);
	}

}

export default Developer;
