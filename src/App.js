import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import texts from './db/texts.js';

const doc = document.documentElement;
let adjustExpandedProjectsView = 0;

class App extends Component {
  	constructor(props) {
    	super(props)

    	this.state = {
	      	language: 'en',
	      	currentSection: {},
			doNotShowLanguagePopupAgain: undefined
    	}
  	}

  	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	    this.loadDefaultLanguage();
  	}

	componentDidUpdate() {
		this.saveToLocalStorage();
	}

	componentWillUnmount() {
	 	window.removeEventListener('scroll', this.handleScroll);
	}


  	loadDefaultLanguage = () => {

	    if (localStorage.getItem("Anna Branco's professional profile") !== null) {
	      this.setState(
	        JSON.parse(localStorage.getItem("Anna Branco's professional profile"))
	      )
	    }
  	}

  	handleAdjustExpandedProjectsView = (adjust) => {
			adjustExpandedProjectsView = adjust;
	}

  	handleScroll = () => {

		if (doc.scrollTop >= 350 && doc.scrollTop <= 1540) {
			document.querySelector('.developer__formation').classList.add('comeIn');
		} else {
			document.querySelector('.developer__formation').classList.remove('comeIn');
		}

		if (doc.scrollTop >= 500 && doc.scrollTop <= 1540 + adjustExpandedProjectsView) {
			document.querySelector('.developer__projects').classList.add('comeIn');
		} else {
			document.querySelector('.developer__projects').classList.remove('comeIn');
		}

		if (doc.scrollTop >= 450 && doc.scrollTop <= 1540 + adjustExpandedProjectsView) {
			document.querySelector('.developer__sidebar').classList.add('comeIn');
		} else {
			document.querySelector('.developer__sidebar').classList.remove('comeIn');
		}

		if (doc.scrollTop >= 1050  + adjustExpandedProjectsView && doc.scrollTop <= 2000 + adjustExpandedProjectsView) {
			document.querySelector('.formation__horizontarBar-psy').classList.add('comeIn');
			document.querySelector('.formation__title-psy').classList.add('comeIn');
			for (const each of document.querySelectorAll('.formation__details-psy')){
				each.classList.add('comeIn');
			}
		} else {
			document.querySelector('.formation__horizontarBar-psy').classList.remove('comeIn');
			document.querySelector('.formation__title-psy').classList.remove('comeIn');
			for (const each of document.querySelectorAll('.formation__details-psy')){
				each.classList.remove('comeIn');
			}
		}

		if (doc.scrollTop >= 1200  + adjustExpandedProjectsView && doc.scrollTop <= 2000 + adjustExpandedProjectsView) {
			document.querySelector('.formation__horizontarBar-ir').classList.add('comeIn');
			document.querySelector('.formation__title-ir').classList.add('comeIn');
			for (const each of document.querySelectorAll('.formation__details-ir')){
				each.classList.add('comeIn');
			}
		} else {
			document.querySelector('.formation__horizontarBar-ir').classList.remove('comeIn');
			document.querySelector('.formation__title-ir').classList.remove('comeIn');
			for (const each of document.querySelectorAll('.formation__details-ir')){
				each.classList.remove('comeIn');
			}
		}

		if (doc.scrollTop >= 1320  + adjustExpandedProjectsView && doc.scrollTop <= 2000 + adjustExpandedProjectsView) {
			document.querySelector('.formation__horizontarBar-master').classList.add('comeIn');
			document.querySelector('.formation__title-master').classList.add('comeIn');
			for (const each of document.querySelectorAll('.formation__details-master')){
				each.classList.add('comeIn');
			}
		} else {
			document.querySelector('.formation__horizontarBar-master').classList.remove('comeIn');
			document.querySelector('.formation__title-master').classList.remove('comeIn');
			for (const each of document.querySelectorAll('.formation__details-master')){
				each.classList.remove('comeIn');
			}
		}

		if (doc.scrollTop >= 1420  + adjustExpandedProjectsView && doc.scrollTop <= 2000 + adjustExpandedProjectsView) {
			document.querySelector('.formation__horizontarBar-adalab').classList.add('comeIn');
			document.querySelector('.formation__title-adalab').classList.add('comeIn');


		} else {
			document.querySelector('.formation__horizontarBar-adalab').classList.remove('comeIn');
			document.querySelector('.formation__title-adalab').classList.remove('comeIn');

		}
  		console.log(doc.scrollTop);
  	}

  changeLanguage = event => {
    this.setState({
      language: event.currentTarget.lang
    });
  }

	clearLanguagePopup = doNotShowAgain => {
		this.setState({
			doNotShowLanguagePopupAgain: doNotShowAgain
		});
	}

	saveToLocalStorage = () => localStorage.setItem("Anna Branco's professional profile", JSON.stringify(this.state));

  render() {

    return (
      <div className="App">
	        <Header
				texts={texts}
				language={this.state.language}
				changeLanguage={this.changeLanguage}
			/>
	        <MainArea
		        handleAnimation={this.handleAnimation}
		        language={this.state.language}
		        changeLanguage={this.changeLanguage}
				texts={texts}
				clearLanguagePopup={this.clearLanguagePopup}
				doNotShowLanguagePopupAgain={this.state.doNotShowLanguagePopupAgain}
				handleAdjustExpandedProjectsView={this.handleAdjustExpandedProjectsView}
	        />
      </div>
    );
  }
}

export default App;
