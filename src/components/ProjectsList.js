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
			en: 'This is the page you are currently visiting. It was created as a personal project developed with React.js as a digital presentation of my professional profile.',
			es: 'Esta es la página donde está Usted. Ha sido creada como un proyecto personal desarrollado con React.js para presentación digital de mi perfil profesional.',
			pt: 'Esta é a página onde você está. Foi criada como um projeto pessoal desenvolvido com React.js para apresentação digital do meu perfil profissional.'
		},
	},
	{
		title: 'Toy Story Games',
		thumbnail: toyStory,
		url: 'https://annabranco.github.io/toy-story-games/',
		repo: 'https://github.com/annabranco/toy-story-games',
		description: {
			en: 'This is a fun and beautiful memory card game themed on Disney’s Toy Story characters, for all ages. It is based on an evaluation exercise from Adalab.',
			es: 'Un divertido y bonito juego de parejas, con tema de Toy Story (Disney). Foi basado en un ejercicio de evaluación de Adalab.',
			pt: 'Um divertido e bonito jogo da memória, com temática de Toy Story (Disney). Foi inspirado por um exercício de avaliação de Adalab.'
		},
	},
	{
		title: 'An Adventure',
		thumbnail: anAdventure,
		url: 'https://annabranco.github.io/an-adventure/',
		repo: 'https://github.com/annabranco/an-adventure',
		description: {
			en: 'This is an original creation of an Role Playing Game. There is currently just one simple task to accomplish. The game assets are not mine.',
			es: 'Una creacción original de un juego de rol. Actualmente hay solamente un objetivo por alcanzar. Los gráficos y sonidos del juego no son míos',
			pt: 'Uma criação original de uma aventura de RPG. No momento só há um simples objetivo por alcançar. Os gráficos e sons do jogo não são meus.'
		},
	},
	{
		title: 'Ni Piter FC',
		thumbnail: niPiter,
		url: 'https://annabranco.github.io/nipiterfc/',
		repo: 'https://github.com/annabranco/nipiterfc',
		description: {
			en: 'This is a prototype of a web page of football team. The news and contact pages are embed content from Wordpress to reproduce back-end functionalities.',
			es: 'Un prototipo de una página web de un equipo de fútbol. La parte de noticias y contacto son contenidos externos reproduciendo funcionalidades back-end.',
			pt: 'Um protótipo de uma página web de um time de futebol. A parte de notícias e contato são conteúdos externos reproduzindo funcionalidades back-end.',

		},
	},
	{
		title: 'TV Series Finder',
		thumbnail: tvSeriesFinder,
		url: 'https://annabranco.github.io/tv-series-finder/',
		repo: 'https://github.com/annabranco/tv-series-finder',
		description: {
			en: 'This is a TV series finder, where users can search on a huge database. Users can also see their summaries, ratings and add series to favorites.',
			es: 'Un buscador de series de televisión, donde usuarios pueden buscar en un enorme banco de datos, bien como ver sinopsis, valoraciones y añadir a favoritos.',
			pt: 'Um buscador de séries de TV, onde os usuários podem buscar en um enorme banco de dados, bem como ver sinopses, avaliações e adicionar a favoritos.'
		},
	},
	{
		title: 'Awesome Profile Cards',
		thumbnail: awesomeProfileCards,
		url: 'http://beta.adalab.es/dorcas-s3-ohana-group/',
		repo: 'https://github.com/Adalab/dorcas-s3-ohana-group',
		description: {
			en: 'This is the final technical project from Adalab developed by a group of five students (called Ohana). It generates a professional profile card to be shared.',
			es: 'Proyecto técnico final de Adalab desarrollado por un equipo de 5 estudiantes (llamadas Ohana). Crea una tarjeta virtual profesional para compartirla.',
			pt: 'Projeto técnico final de Adalab, desenvolvido por um time de 5 estudantes (chamadas Ohana). Cria um cartão virtual profissional para ser compartilhado.'
		},
	},
	{
		title: 'Harry Potter Database',
		thumbnail: harryPotterDatabase,
		url: 'https://annabranco.github.io/harry-potter-database',
		repo: 'https://github.com/annabranco/harry-potter-database',
		description: {
			en: 'This is a beautiful visual database of Harry Potter characters, with filters and favorites function. I’m growing the database as my own API.',
			es: 'Un bonito banco de datos visual de los personajes de Harry Potter, con filtros y gestión de favoritos. Estoy desarrollando los datos como una propia API mía.',
			pt: 'Un bonito banco de dados visual dos personagens de Harry Potter, com filtros e gestão de favoritos. Estou desenvolvendo os dados como minha própria API.'
		}
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
		this.props.handleAdjustThumbnailsView(e.currentTarget.checked);
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

		const text = this.props.text;
		const language = this.props.language;

		return (

			<React.Fragment>

				<div className="developer__projects--thumbnails-checkbox">
					<input id="developer__projects-checkbox" type="checkbox" className="developer__projects-checkbox" onClick={this.handleThumbnails}/>
					<label htmlFor="developer__projects-checkbox">{text[language].showThumbnails}</label>
				</div>
				<ul className="projects__list">

					{ projects.map( (project,index) => {
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
