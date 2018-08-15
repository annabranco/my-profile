import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import beach from './images/bg/beach.jpg';
import coding from './images/bg/coding.jpg';
import surf from './images/bg/surf.jpg';
import skate from './images/bg/skate.jpg';
import football from './images/bg/football.jpg';
import bunnies from './images/bg/bunnies.jpg';
import love from './images/bg/love.jpg';

const doc = document.documentElement;
const innerText = document.querySelectorAll('.innertext');
let allBackgrounds = [];
const allBlocks = [
  {
    num: 0,
    scrollBegin: 600,
    scrollEnd: 1200,
    bg: beach
  },
  {
    num: 1, //3
    scrollBegin: 1300,
    scrollEnd: 1950
  },
  {
    num: 2, //6
    scrollBegin: 2000,
    scrollEnd: 2800
  },
  {
    num: 3, //9
    scrollBegin: 2800,
    scrollEnd: 3600
  },
  {
    num: 4, //12
    scrollBegin: 3600,
    scrollEnd: 4400
  },
  {
    num: 5, //15
    scrollBegin: 4400,
    scrollEnd: 5200
  },
];

const blockContents = [
  {
    bg: beach,
    en: {
      title: 'Main traits',
      top: 'Nice and calm',
      middle: 'Resilient',
      bottom: 'Positive and vibrant'
    },
    es: {
      title: 'Rasgos principales',
      top: 'Calma y tranquila',
      middle: 'Resiliente',
      bottom: 'Positiva y alegre'
    },
    pt: {
      title: 'Main traits',
      top: 'Nice and calm',
      middle: 'Resilient',
      bottom: 'Positive and vibrant'
    },
    fr: {
      title: 'Rasgos principales',
      top: 'Calma y tranquila',
      middle: 'Resiliente',
      bottom: 'Positiva y alegre'
    }
  },
  {
    bg: coding,
    en: {
      title: 'Creative',
      top: 'Passion for technology',
      middle: 'Capacity to work autonomosuly',
      bottom: 'Dedicated developer'
    },
    es: {
      title: 'Creativa',
      top: 'Apasionada por tecnología',
      middle: 'Capaz de trabajar autonomamente',
      bottom: 'Desarrolladora dedicada'
    },
    pt: {
      title: 'Creative',
      top: 'Passion for technology',
      middle: 'Capacity to work autonomosuly',
      bottom: 'Dedicated developer'
    },
    fr: {
      title: 'Creativa',
      top: 'Apasionada por tecnología',
      middle: 'Capaz de trabajar autonomamente',
      bottom: 'Desarrolladora dedicada'
    }
  },
  {
    bg: surf,
    en: {
      title: 'Flexible',
      top: 'Understands fluxes of processes',
      middle: 'Adapting to each different wave',
      bottom: 'Enjoying the process'
    },
    es: {
      title: 'Flexible',
      top: 'Busco conocer todos los flujos de los procesos',
      middle: 'Adaptándome a cada distinta ola',
      bottom: 'Y disfrutando el proceso'
    },
    pt: {
      title: 'Flexible',
      top: 'Understands fluxes of processes',
      middle: 'Adapting to each different wave',
      bottom: 'Enjoying the process'
    },
    fr: {
      title: 'Flexible',
      top: 'Busco conocer todos los flujos de los procesos',
      middle: 'Adaptándome a cada distinta ola',
      bottom: 'Y disfrutando el proceso'
    }
  },
  {
    bg: skate,
    en: {
      title: 'Tenacious',
      top: 'Loves challenges',
      middle: 'Without fear for falls',
      bottom: 'And smiling even under pressure'
    },
    es: {
      title: 'Persistente',
      top: 'Encaro de frente a los desafíos',
      middle: 'Sin miedo de posibles caídas',
      bottom: 'Y sonriendo mismo bajo presión'
    },
    pt: {
      title: 'Tenacious',
      top: 'Loves challenges',
      middle: 'Without fear for falls',
      bottom: 'And smiling even under pressure'
    },
    fr: {
      title: 'Persistente',
      top: 'Encaro de frente a los desafíos',
      middle: 'Sin miedo de posibles caídas',
      bottom: 'Y sonriendo mismo bajo presión'
    }
  },
  {
    bg: football,
    en: {
      title: 'Team player',
      top: 'Neves loses focus on the ball',
      middle: 'Able to play at different roles',
      bottom: 'Understanding victories as result of coordinated teamworking'
    },
    es: {
      title: 'Juego en equipo',
      top: 'Nunca pierdo el foco de la pelota',
      middle: 'Puedo adaptarme a distintos roles',
      bottom: 'Entendiendo los logros como resultado de un trabajo coordinado de equipo'
    },
    pt: {
      title: 'Team player',
      top: 'Neves loses focus on the ball',
      middle: 'Able to play at different roles',
      bottom: 'Understanding victories as result of coordinated teamworking'
    },
    fr: {
      title: 'Juego en equipo',
      top: 'Nunca pierdo el foco de la pelota',
      middle: 'Puedo adaptarme a distintos roles',
      bottom: 'Entendiendo los logros como resultado de un trabajo coordinado de equipo'
    }
  },
  {
    bg: bunnies,
    en: {
      title: 'Empathetic',
      top: 'Kind and gentle',
      middle: 'Cares for others feeling ans opinions',
      bottom: 'Always ready to give a helping hand'
    },
    es: {
      title: 'Empática',
      top: 'Simpática y amable',
      middle: 'Me importo con los sentimentos y opiniones de los demás',
      bottom: 'Y siempre lista para ayudar'
    },
    pt: {
      title: 'Empathetic',
      top: 'Kind and gentle',
      middle: 'Cares for others feeling ans opinions',
      bottom: 'Always ready to give a helping hand'
    },
    fr: {
      title: 'Empática',
      top: 'Simpática y amable',
      middle: 'Me importo con los sentimentos y opiniones de los demás',
      bottom: 'Y siempre lista para ayudar'
    }
  },
  {
    bg: love,
    en: {
      title: 'And passionated for life',
    },
    es: {
      title: 'Y apasionada por la vida',
    },
    pt: {
      title: 'And passionated for life',
    },
    fr: {
      title: 'Y apasionada por la vida',
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
      currentBlock: {}
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.mountBGs();
    this.loadDefaultLanguage();
  }

  mountBGs = () => {
    for (const block of blockContents) {
      allBackgrounds.push(block.bg)
    }
  }

  loadDefaultLanguage = () => {

    if (localStorage.getItem("Anna Branco's profile default language") !== null) {
      this.setState({
        language: localStorage.getItem("Anna Branco's profile default language")
      })
    }

  }

  handleScroll = () => {

    for (const block of allBlocks) {
      if (doc.scrollTop >= block.scrollBegin && doc.scrollTop <= block.scrollEnd){
        this.setState({ currentBlock: block })
      }
    }
  }

  showText = () => {
    const language = this.state.language;
console.log(doc.scrollTop);
    if (doc.scrollTop >= this.state.currentBlock.scrollBegin && doc.scrollTop <= this.state.currentBlock.scrollBegin + 190 ) {
      return (
        <div className="innertext animateIn">
          <p className="innertext--p">{blockContents[this.state.currentBlock.num][language].top}</p>
        </div>
      )
    } else if (doc.scrollTop > this.state.currentBlock.scrollBegin + 210 && doc.scrollTop <= this.state.currentBlock.scrollEnd - 210) {
      return (
        <div className="innertext animateIn">
          <p className="innertext--p">{blockContents[this.state.currentBlock.num][language].middle}</p>
        </div>
      )
    } else if (doc.scrollTop > this.state.currentBlock.scrollEnd - 190 && doc.scrollTop <= this.state.currentBlock.scrollEnd ) {
      return (
        <div className="innertext animateIn">
          <p className="innertext--p">{blockContents[this.state.currentBlock.num][language].bottom}</p>
        </div>
      )
    } else {
      return (
        <div className="innertext">
        </div>
      )
}
  }

  changeLanguage = event => {
    this.setState({
      language: event.currentTarget.id
    })
    localStorage.setItem("Anna Branco's profile default language", event.currentTarget.id)
  }

  render() {

    return (
      <div className="App">
        <Header />
        <MainArea
          showText={this.showText}
          bgs={allBackgrounds}
          language={this.state.language}
          changeLanguage={this.changeLanguage}
          blockContents={blockContents}
        />
      </div>
    );
  }
}

export default App;
