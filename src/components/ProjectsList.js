import React from 'react';
import '../styles/components/ProjectsList.css';
import myProfile from '../images/thumbnails/thumbnail-my-profile.jpg';
import toyStory from '../images/thumbnails/thumbnail-toy-story.jpg';
import anAdventure from '../images/thumbnails/thumbnail-an-adventure.jpg';
import niPiter from '../images/thumbnails/thumbnail-ni-piter.jpg';
import tvSeriesFinder from '../images/thumbnails/thumbnail-tv-series-finder.jpg';
import awesomeProfileCards from '../images/thumbnails/thumbnail-awesome-profile-cards.jpg';
import harryPotterDatabase from '../images/thumbnails/thumbnail-harry-potter-database.jpg';




const projects = [
	{
		title: 'My profile',
		thumbnail: myProfile,
		url: 'https://annabranco.github.io/my-profile/',
		repo: 'https://github.com/annabranco/my-profile',
		description: {
			en: 'This is the page you are currently seeing. It was created with React.js as a digital presentation of my professional profile, seasoned with personal traits.'
		},
	},
	{
		title: 'Toy Story Games',
		thumbnail: toyStory,
		url: 'https://annabranco.github.io/toy-story-games/',
		repo: 'https://github.com/annabranco/toy-story-games',
		description: {
			en: 'This is a fun and beautiful memory card game themed on Disney’s Toy Story characters, for all ages. It is based on an evaluation exercise from Adalab.'
		},
	},
	{
		title: 'An Adventure',
		thumbnail: anAdventure,
		url: 'https://annabranco.github.io/an-adventure/',
		repo: 'https://github.com/annabranco/an-adventure',
		description: {
			en: 'This is an original creation of an Role Playing Game adventure. There is currently just one simple task to accomplish. The game assets are not mine.'
		},
	},
	{
		title: 'Ni Piter FC',
		thumbnail: niPiter,
		url: 'https://annabranco.github.io/nipiterfc/',
		repo: 'https://github.com/annabranco/nipiterfc',
		description: {
			en: 'This is a prototype of a web page of football team. The news and contact pages are embed content from Wordpress to reproduce back-end functionalities.'
		},
	},
	{
		title: 'TV Series Finder',
		thumbnail: tvSeriesFinder,
		url: 'https://annabranco.github.io/tv-series-finder/',
		repo: 'https://github.com/annabranco/tv-series-finder',
		description: {
			en: 'This is a simple TV series finder, where users can search on a huge database. Users can also see their summaries, ratings and add series to favorites.'
		},
	},
	{
		title: 'Awesome Profile Cards',
		thumbnail: awesomeProfileCards,
		url: 'http://beta.adalab.es/dorcas-s3-ohana-group/',
		repo: 'https://github.com/Adalab/dorcas-s3-ohana-group',
		description: {
			en: 'This is the final technical project from Adalab developed by a group of five students (called Ohana). It generates a professional profile card to be shared.'
		},
	},
	{
		title: 'Harry Potter Database',
		thumbnail: harryPotterDatabase,
		url: 'https://annabranco.github.io/harry-potter-database',
		repo: 'https://github.com/annabranco/harry-potter-database',
		description: {
			en: 'This is a beautiful visual database of Harry Potter series characters with filters and favorites function. I’m slowly growing the Database as an API of my own.'
		},
	}
]

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
	}


	nextProjects = () => {
		console.log(document.querySelector('.projects__list').scrollTop);
		document.querySelector('.projects__list').scrollTop += 252;
		document.querySelector('.fa-arrow-alt-circle-up').classList.remove('invisible');
		document.querySelector('.project__seeMore-up').classList.remove('invisible');

		if (document.querySelector('.projects__list').scrollTop === 756) {
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

		return (

			<React.Fragment>

				<div className="developer__projects--thumbnails-checkbox">
					<input id="developer__projects-checkbox" type="checkbox" className="developer__projects-checkbox" onClick={this.handleThumbnails}/>
					<label forHtml="developer__projects-checkbox">Enseñar miniaturas</label>
				</div>
				<ul className="projects__list">

					{ projects.map(project => {
						return (
							<React.Fragment>

							<li className="project__item">
								<a href={project.url} className="project__url-a" target="_Blank">

									<h3 className="project__title">{project.title} <i class="far fa-eye project__title-icon"></i></h3>

								</a>
								<p className="project__description">{project.description.en}</p>

								<a href={project.repo} className="project__url-a" target="_Blank">
									<p className="project__repo"><i class="fab fa-github-alt project__repo--icon"></i>{project.repo}</p>
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
					<span className="project__seeMore-text project__seeMore-up invisible">go up</span>
					<i class="far fa-arrow-alt-circle-up icon--more invisible" onClick={this.previousProjects}></i>
					<i class="far fa-arrow-alt-circle-down icon--more" onClick={this.nextProjects}></i>
					<span className="project__seeMore-text project__seeMore-down">show more</span>



				</div>
			}
		</React.Fragment>
	);
}

}

export default ProjectsList;
