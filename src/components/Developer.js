import React from 'react';
import Social from './Social';
import ProjectsList from './ProjectsList';
import '../styles/components/Developer.css';
import LogoAdalab from '../images/logo-adalab.png';
import html from '../images/skills/html5.png';
import css from '../images/skills/css3.png';
import javascript from '../images/skills/js.png';
import git from '../images/skills/git.png';
import github from '../images/skills/github.png';
import bootstrap from '../images/skills/bootstrap.png';
import zeplin from '../images/skills/zeplin.png';

class Developer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			knowMore: false,
			seeAll: false
		}

	}

	knowMore = () => this.setState(prevState => ({ knowMore: !prevState.knowMore }));

	seeAll = () => {
		this.setState(prevState => ({ seeAll: !prevState.seeAll }));

		if(this.state.seeAll) {
			document.querySelector('.projects__list').style.height = '210px';
		} else {
			document.querySelector('.projects__list').style.height = 'auto';
		}
	}

	render () {

		const text = this.props.texts.Hero;
		const language = this.props.language;

		return (

			<section className="section__developer">

				<div className="developer__outer container">
					<div className="row">

						<div className="developer__sidebar col-3">
							<h3 className="developer__skills--title">Main skills</h3>

							<div className="developer__inner--skills">

								<div className="skills__outer">
									<h4 className="skills__text">CSS</h4>
									<div className="skills__inner--icon">
										<img src={css} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">HTML</h4>
									<div className="skills__inner--icon">
										<img src={html} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">JavaScript</h4>
									<div className="skills__inner--icon">
										<img src={javascript} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">SASS/SCSS</h4>
									<div className="skills__inner--icon">
										<i class="fab fa-sass skills__icon icon--sass" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">React.js</h4>
									<div className="skills__inner--icon">
										<i class="fab fa-react skills__icon icon--react" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">git</h4>
									<div className="skills__inner--icon">
										<img src={git} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star" aria-hidden></i>
										<i class="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

							</div>
							<h3 className="developer__skills--title">Others skills</h3>
							<div className="developer__inner--skills developer__inner--skills-others">

								<div className="skills__outer">
									<h4 className="skills__text--others">GitHub</h4>
									<div className="skills__inner--icon-others">
										<img src={github} alt="" className="skills__icon--others icon--github"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i class="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i class="fas fa-star icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">node.js</h4>
									<div className="skills__inner--icon-others">
										<i class="fab fa-node-js skills__icon--others icon--node" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">gulp</h4>
									<div className="skills__inner--icon-others">
										<i class="fab fa-gulp skills__icon--others icon--gulp" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">npm</h4>
									<div className="skills__inner--icon-others">
										<i class="fab fa-npm skills__icon--others icon--npm" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">Bootstrap</h4>
									<div className="skills__inner--icon-others">
										<img src={bootstrap} alt="" className="skills__icon--others icon--bootstrap" />
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">Zeplin</h4>
									<div className="skills__inner--icon-others">
										<img src={zeplin} alt="" className="skills__icon--others icon--zeplin"/>
									</div>
									<div className="skills__inner--stars">
										<i class="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i class="fas fa-star icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

							</div>

						</div>

						<div className="developer__main col-9">
							<div className="developer__formation">
								<h2 className="developer__adalab--title">Formation by <img src={LogoAdalab} alt="Adalab" className="developer__adalab--logo"/><span className="developer--more" onClick={this.knowMore}>Know more</span></h2>
								{ this.state.knowMore ?
										<p className="developer__adalab--text">Adalab es un programa de formación intensiva destinado a la inclusión de mujeres en el sector digital. En cuatro meses, con una media de 9 horas de estudios por día (6 presenciales), aprendemos la parte técnica de front-end, bien como importantes temas de desarrollo profesional. Trabajamos también com metodologías ágiles.</p>
								: null }
								{ this.state.knowMore ?

										<p className="developer__adalab--text">Para saber más informaciones sobre Adalab, puedes consultar <a href="https://www.adalab.es" target="_Blank" className="project__url-a">su página web</a>.</p>
								: null }

							</div>
							<div className="developer__projects">
								<h2 className="developer__projects--title">Projects<span className="developer--more" onClick={this.seeAll}>{this.state.seeAll ? 'Reduced view' : 'Expanded view'}</span></h2>
								<p className="developer__projects--text">En esta sección puede ver algunos de mis proyectos y creacciones:
								</p>


								<ProjectsList seeAll={this.state.seeAll}/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Developer;
