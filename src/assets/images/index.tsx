/* eslint-disable global-require */

import { LEFT, RIGHT } from '../../constants';
import Agile from './skills/agile.png';
import AnAdventure from './thumbnails/thumbnail-an-adventure.jpg';
import Angular from './skills/angular.png';
import ArrowsDown from './other/arrowsDown.gif';
import Barquinho from './other/barquinho.gif';
import Binary from './other/bg-binary.jpg';
import Birds from './fishes/birds.gif';
import BlinkingFish from './fishes/fish-blink.gif';
import ClosedShell from './fishes/shell-closed.png';
import Crab from './fishes/crab.gif';
import Css from './skills/css3.png';
import DaysGoBy from './thumbnails/thumbnail-days-go-by.jpg';
import Docker from './skills/docker.png';
import Fish0 from './fishes/fish0.gif';
import Fish1 from './fishes/fish1.gif';
import Fish2 from './fishes/fish2.gif';
import Fish3 from './fishes/fish3.gif';
import Fish4 from './fishes/fish4.gif';
import Fish5 from './fishes/fish5.gif';
import FloatingLeft from './other/floatingLeft.gif';
import FloatingRight from './other/floatingRight.gif';
import Git from './skills/git.png';
import HarryPotter from './thumbnails/thumbnail-harry-potter-database.jpg';
import Html from './skills/html5.png';
import Jasmine from './skills/jasmine.png';
import Javascript from './skills/js.png';
import LogoAdalab from './logo-adalab.png';
import MacNotebook from './bg/bg-mac.jpg';
import Mugshot from './annabranco.png';
import MyProfile from './thumbnails/thumbnail-my-profile.jpg';
import NNK from './thumbnails/thumbnail-no-name-kitchen.jpg';
import OpenedShell from './fishes/shell-opened.png';
import Photoshop from './skills/photoshop.png';
import Python from './skills/python.png';
import React from './skills/react.png';
import Redux from './skills/redux.png';
import ScubaFish from './fishes/scubafish.gif';
import Sea from './bg/sea.gif';
import SeaBed from './bg/seabed.jpg';
import Shaka from './skills/shaka.png';
import Shougi from './thumbnails/thumbnail-shougi.jpg';
import StyledComponents from './skills/styled-components.png';
import SwimmingLeft from './other/swimmingLeft.gif';
import SwimmingRight from './other/swimmingRight.gif';
import Swipe from './other/swipe.gif';
import ToyStory from './thumbnails/thumbnail-toy-story.jpg';
import TvSeries from './thumbnails/thumbnail-tv-series-finder.jpg';
import Typescript from './skills/typescript.png';
import Webpack from './skills/webpack.png';
import Zombicide from './thumbnails/thumbnail-zombicide-party.jpg';

export const THUMBNAILS = {
  'zombicide-party': Zombicide,
  'no-name-kitchen': NNK,
  'toy-story': ToyStory,
  'an-adventure': AnAdventure,
  shougi: Shougi,
  'harry-potter-database': HarryPotter,
  'tv-series-finder': TvSeries,
  'my-profile': MyProfile,
  'days-go-by': DaysGoBy
};

export const FISHES = [
  {
    facing: LEFT,
    img: Fish0
  },
  {
    facing: LEFT,
    img: Fish1
  },
  {
    facing: LEFT,
    img: Fish2
  },
  {
    facing: RIGHT,
    img: Fish3,
    waving: true
  },
  {
    facing: RIGHT,
    img: Fish4
  },
  {
    facing: RIGHT,
    img: Fish5
  }
];

export {
  Agile,
  Angular,
  ArrowsDown,
  Barquinho,
  Binary,
  Birds,
  BlinkingFish,
  ClosedShell,
  Crab,
  Css,
  Docker,
  FloatingLeft,
  FloatingRight,
  Git,
  Html,
  Jasmine,
  Javascript,
  LogoAdalab,
  MacNotebook,
  Mugshot,
  OpenedShell,
  Photoshop,
  Python,
  React,
  Redux,
  ScubaFish,
  Sea,
  SeaBed,
  Shaka,
  StyledComponents,
  SwimmingLeft,
  SwimmingRight,
  Swipe,
  Typescript,
  Webpack
};
