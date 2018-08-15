import React from 'react';
import ScrollItem from './ScrollItem';
import '../styles/components/ScrollArea.css';
import beach from '../images/bg/beach.jpg';
import coding from '../images/bg/coding.jpg';
import surf from '../images/bg/surf.jpg';
import skate from '../images/bg/skate.jpg';
import football from '../images/bg/football.jpg';
import bunnies from '../images/bg/bunnies.jpg';
import love from '../images/bg/love.jpg';

const scrollTexts = [
  {
    bg: beach,
    title: 'Personality traits',
    top: 'Nice and calm',
    middle: 'Resilient',
    bottom: 'Positive and vibrant'
  },
  {
    bg: coding,
    title: 'Creative',
    top: 'Passion for technology',
    middle: 'Capacity to work autonomosuly',
    bottom: 'Dedicated developer'
  },
  {
    bg: surf,
    title: 'Flexible',
    top: 'Understands fluxes of processes',
    middle: 'Adapting to each different wave',
    bottom: 'Enjoying the process'
  },
  {
    bg: skate,
    title: 'Tenacious',
    top: 'Loves challenges',
    middle: 'Without fear for falls',
    bottom: 'And smiling even under pressure'
  },
  {
    bg: football,
    title: 'Team player',
    top: 'Neves loses focus on the ball',
    middle: 'Playing at different roles',
    bottom: 'Understanding victories as result of coordinated teamworking'
  },
  {
    bg: bunnies,
    title: 'Empathetic',
    top: 'Kind and gentle',
    middle: 'Cares for others feeling ans opinions',
    bottom: 'Always ready to give a helping hand'
  },
  {
    bg: love,
    title: 'And passionated for life',
  }
]

class ScrollArea extends React.Component {

  determineBlocks() {
    let BlocksToRender = [];
    for (let i = 1; i <= 7; i++) {
      BlocksToRender.push(<ScrollItem
        number={i}
        bg={`url('${scrollTexts[i-1].bg}')`}
        title={scrollTexts[i-1].title}
        top={scrollTexts[i-1].top}
        middle={scrollTexts[i-1].middle}
        bottom={scrollTexts[i-1].bottom}
      />) ;
    }
    return BlocksToRender;
  }


  render () {

    return (
      <section className="main__images">

        {this.determineBlocks()}

      </section>
    );
  }

}

export default ScrollArea;
