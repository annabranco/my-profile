import React from 'react';
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

let adjust = 0;

class Developer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			knowMore: false,
			seeAll: false,
			seeThumbnails: false
		}

	}

	knowMore = () => this.setState(prevState => ({ knowMore: !prevState.knowMore }));

	seeAll = () => {
		this.setState(prevState => ({ seeAll: !prevState.seeAll }));

		if (this.state.seeAll) {
			document.querySelector('.projects__list').style.height = '210px';
		} else {
			document.querySelector('.projects__list').style.height = 'auto';
		}
	}

	handleAdjustThumbnailsView = (thumbnails) => {
		this.setState({ seeThumbnails: thumbnails });
	}

componentDidUpdate() {
	adjust = 0;

	if((this.state.seeThumbnails) && (this.state.seeAll)) {
		adjust = 1300;
	} else if(this.state.seeAll) {
		adjust = 650;
	} else {
		adjust = 0;
	}
	if (this.state.knowMore) {
		adjust += 200;
	}
	this.props.handleAdjustExpandedProjectsView(adjust);
}

	render () {

		const text = this.props.texts.Developer;
		const language = this.props.language;

		return (

			<section className="section__developer">

				<div className="developer__outer container">
					<div className="row">

						<div className="developer__sidebar col-3">
							<h3 className="developer__skills--title">{text[language].main}</h3>

							<div className="developer__inner--skills">

								<div className="skills__outer">
									<h4 className="skills__text">CSS</h4>
									<div className="skills__inner--icon">
										<img src={css} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">HTML</h4>
									<div className="skills__inner--icon">
										<img src={html} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">JavaScript</h4>
									<div className="skills__inner--icon">
										<img src={javascript} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">SASS/SCSS</h4>
									<div className="skills__inner--icon">
										<i className="fab fa-sass skills__icon icon--sass" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star-half icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">React.js</h4>
									<div className="skills__inner--icon">
										<i className="fab fa-react skills__icon icon--react" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text">git</h4>
									<div className="skills__inner--icon">
										<img src={git} alt="" className="skills__icon"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star" aria-hidden></i>
										<i className="fas fa-star icon--star" aria-hidden></i>
									</div>
								</div>

							</div>
							<h3 className="developer__skills--title">{text[language].other}</h3>
							<div className="developer__inner--skills developer__inner--skills-others">

								<div className="skills__outer">
									<h4 className="skills__text--others">GitHub</h4>
									<div className="skills__inner--icon-others">
										<img src={github} alt="" className="skills__icon--others icon--github"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i className="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i className="fas fa-star icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">node.js</h4>
									<div className="skills__inner--icon-others">
										<i className="fab fa-node-js skills__icon--others icon--node" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">gulp</h4>
									<div className="skills__inner--icon-others">
										<i className="fab fa-gulp skills__icon--others icon--gulp" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">npm</h4>
									<div className="skills__inner--icon-others">
										<i className="fab fa-npm skills__icon--others icon--npm" aria-hidden></i>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">Bootstrap</h4>
									<div className="skills__inner--icon-others">
										<img src={bootstrap} alt="" className="skills__icon--others icon--bootstrap" />
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star-half icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

								<div className="skills__outer">
									<h4 className="skills__text--others">Zeplin</h4>
									<div className="skills__inner--icon-others">
										<img src={zeplin} alt="" className="skills__icon--others icon--zeplin"/>
									</div>
									<div className="skills__inner--stars">
										<i className="fas fa-star icon--star icon--star--others" aria-hidden></i>
										<i className="fas fa-star icon--star icon--star--others" aria-hidden></i>
									</div>
								</div>

							</div>

						</div>

						<div className="developer__main col-9">
							<div className="developer__formation">
								<h2 className="developer__adalab--title">{text[language].formation} <img src={LogoAdalab} alt="Adalab" className="developer__adalab--logo"/><span className="developer--more" onClick={this.knowMore}>{text[language].more}</span></h2>

								{ this.state.knowMore ?
										<p className="developer__adalab--text">
											{text[language].adalabText}
										</p>
								: null }
								{ this.state.knowMore ?

										<p className="developer__adalab--text">
											{text[language].adalabMore}
											<a href="https://www.adalab.es" target="_Blank" rel="noopener noreferrer" className="project__url-a">Adalab</a>
										</p>
								: null }

							</div>
							<div className="developer__projects">
								<h2 className="developer__projects--title">{text[language].projects}<span className="developer--more" onClick={this.seeAll}>{this.state.seeAll ? text[language].reduced : text[language].expanded}</span></h2>
								<p className="developer__projects--text">
									{text[language].projectsText}
								</p>


								<ProjectsList
									seeAll={this.state.seeAll}
									text={text}
									language={language}
									handleAdjustThumbnailsView={this.handleAdjustThumbnailsView}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Developer;
