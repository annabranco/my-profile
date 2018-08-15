import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';

const doc = document.documentElement;
const innerText = document.querySelectorAll('.innertext');
let currentBlock;
const allBlocks = [
  {
    num: 0,
    scrollBegin: 600,
    scrollEnd: 1300
  },
  {
    num: 3,
    scrollBegin: 1300,
    scrollEnd: 1950
  },
  {
    num: 6,
    scrollBegin: 2000,
    scrollEnd: 2800
  },
  {
    num: 9,
    scrollBegin: 2800,
    scrollEnd: 3600
  },
  {
    num: 12,
    scrollBegin: 3600,
    scrollEnd: 4400
  },
  {
    num: 15,
    scrollBegin: 4400,
    scrollEnd: 5200
  },
];


class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    language: 'en',
  }
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
}

handleScroll = () => {

  for (const block of allBlocks) {
    if (doc.scrollTop >= block.scrollBegin && doc.scrollTop <= block.scrollEnd){
      currentBlock = block;
      this.showText();
    }
  }
}

showText = () => {
  console.log(doc.scrollTop);

  if (doc.scrollTop >= currentBlock.scrollBegin && doc.scrollTop <= currentBlock.scrollBegin + 200 ) {
    innerText[currentBlock.num].classList.add('animateIn');
  } else {
    if (innerText[currentBlock.num].classList.contains('animateIn')) {
      innerText[currentBlock.num].classList.remove('animateIn')
    }
  }

  if (doc.scrollTop >= currentBlock.scrollBegin + 200 && doc.scrollTop <= currentBlock.scrollEnd - 200) {
    innerText[currentBlock.num+1].classList.add('animateIn');
  } else {
    if (innerText[currentBlock.num+1].classList.contains('animateIn')) {
      innerText[currentBlock.num+1].classList.remove('animateIn')
    }
  }

  if (doc.scrollTop >= currentBlock.scrollEnd - 200 && doc.scrollTop <= currentBlock.scrollEnd ) {
    innerText[currentBlock.num+2].classList.add('animateIn');
  } else {
    if (innerText[currentBlock.num+2].classList.contains('animateIn')) {
      innerText[currentBlock.num+2].classList.remove('animateIn')
    }
  }
}

  render() {
    return (
      <div className="App">
        <Header />
        <MainArea />
      </div>
    );
  }
}

export default App;
