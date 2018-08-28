import React from 'react';
import '../styles/components/ProjectsList.css';
import projectsDB from '../db/projectsDB';


class ProjectsList extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			showThumbnails: false
		}

	}

	handleThumbnails = e => {
		this.setState({
		showThumbnails: e.currentTarget.checked
		});

		if (e.currentTarget.checked) {
			document.querySelector('.projects__list').style.gridTemplateRows = '225px';
		} else {
			document.querySelector('.projects__list').style.gridTemplateRows = '225px';
		}
		this.props.handleAdjustThumbnailsView(e.currentTarget.checked);
	}


	nextProjects = () => {
		let adjustments = 1;
		if (this.state.showThumbnails) {
			adjustments = 2;
		}

		console.log(document.querySelector('.projects__list').scrollTop);
		document.querySelector('.projects__list').scrollTop += 248;
		document.querySelector('.fa-arrow-alt-circle-up').classList.remove('invisible');
		document.querySelector('.project__seeMore-up').classList.remove('invisible');

		if (document.querySelector('.projects__list').scrollTop >= 744 * adjustments) {
			document.querySelector('.fa-arrow-alt-circle-down').classList.add('invisible');
			document.querySelector('.project__seeMore-down').classList.add('invisible');

		}
	}

	previousProjects = () => {
		console.log(document.querySelector('.projects__list').scrollTop);
		document.querySelector('.projects__list').scrollTop -= 252;
		document.querySelector('.fa-arrow-alt-circle-down').classList.remove('invisible');
		document.querySelector('.project__seeMore-down').classList.remove('invisible');

		if (document.querySelector('.projects__list').scrollTop === 0) {
			document.querySelector('.fa-arrow-alt-circle-up').classList.add('invisible');
			document.querySelector('.project__seeMore-up').classList.add('invisible');

		}
	}

	render () {

		const text = this.props.text;
		const language = this.props.language;

		return (

			<React.Fragment>

				<div className="developer__projects--thumbnails-checkbox">
					<input id="developer__projects-checkbox" type="checkbox" className="developer__projects-checkbox" onClick={this.handleThumbnails}/>
					<label htmlFor="developer__projects-checkbox">{text[language].showThumbnails}</label>
				</div>
				<ul className="projects__list">

					{ projectsDB.map( (project,index) => {
						return (
							<React.Fragment key={index}>

							<li className="project__item">
								<a href={project.url} className="project__url-a" target="_Blank">

									<h3 className="project__title">{project.title} <i className="far fa-eye project__title-icon"></i></h3>

								</a>
								<p className="project__description">{project.description[language]}</p>

								<a href={project.repo} className="project__url-a" target="_Blank">
									<p className="project__repo"><i className="fab fa-github-alt project__repo--icon"></i>{project.repo}</p>
								</a>
							</li>

							{this.state.showThumbnails ?
								<a href={project.url} className="project__url-a" target="_Blank">
									<img src={project.thumbnail} alt={project.title} className="project__thumbnail"/>
								</a>
								: null
							}

						</React.Fragment>

						);
					})
				}
			</ul>
			{this.props.seeAll ? null :

				<div className="project__seeMore">
					<span className="project__seeMore-text project__seeMore-up invisible">{text[language].goUp}</span>
					<i className="far fa-arrow-alt-circle-up icon--more invisible" onClick={this.previousProjects}></i>
					<i className="far fa-arrow-alt-circle-down icon--more" onClick={this.nextProjects}></i>
					<span className="project__seeMore-text project__seeMore-down">{text[language].showMore}</span>



				</div>
			}
		</React.Fragment>
	);
}

}

export default ProjectsList;
