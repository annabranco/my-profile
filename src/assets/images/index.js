/* eslint-disable global-require */

import { LEFT, RIGHT } from '../../constants';

export const FloatingLeft = require('./other/floatingLeft.gif');
export const Binary = require('./other/bg-binary.jpg');
export const Birds = require('./fishes/birds.gif');
export const BlinkingFish = require('./fishes/fish-blink.gif');
export const FloatingRight = require('./other/floatingRight.gif');
export const Barquinho = require('./other/barquinho.gif');
export const LogoAdalab = require('./logo-adalab.png');
export const MacNotebook = require('./bg/bg-mac.jpg');
export const Mugshot = require('./annabranco.png');
export const Sea = require('./bg/sea.gif');
export const SeaBed = require('./bg/seabed.jpg');
export const SwimmingRight = require('./other/swimmingRight.gif');
export const SwimmingLeft = require('./other/swimmingLeft.gif');

// Skills
export const Agile = require('./skills/agile.png');
export const Angular = require('./skills/angular.png');
export const Css = require('./skills/css3.png');
export const Docker = require('./skills/docker.png');
export const Git = require('./skills/git.png');
export const Html = require('./skills/html5.png');
export const Jasmine = require('./skills/jasmine.png');
export const Javascript = require('./skills/js.png');
export const Photoshop = require('./skills/photoshop.png');
export const Python = require('./skills/python.png');
export const React = require('./skills/react.png');
export const Redux = require('./skills/redux.png');
export const Shaka = require('./skills/shaka.png');
export const StyledComponents = require('./skills/styled-components.png');
export const Typescript = require('./skills/typescript.png');
export const Webpack = require('./skills/webpack.png');

// Thumbnails
const Zombicide = require('./thumbnails/thumbnail-zombicide-party.jpg');
const NNK = require('./thumbnails/thumbnail-no-name-kitchen.jpg');
const ToyStory = require('./thumbnails/thumbnail-toy-story.jpg');
const AnAdventure = require('./thumbnails/thumbnail-an-adventure.jpg');
const Shougi = require('./thumbnails/thumbnail-shougi.jpg');
const HarryPotter = require('./thumbnails/thumbnail-harry-potter-database.jpg');
const TvSeries = require('./thumbnails/thumbnail-tv-series-finder.jpg');
const MyProfile = require('./thumbnails/thumbnail-my-profile.jpg');
const DaysGoBy = require('./thumbnails/thumbnail-days-go-by.jpg');

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

// Seabed
export const ClosedShell = require('./fishes/shell-closed.png');
export const OpenedShell = require('./fishes/shell-opened.png');
export const ScubaFish = require('./fishes/scubafish.gif');
export const Crab = require('./fishes/crab.gif');

// Fishes
const Fish0 = require('./fishes/fish0.gif');
const Fish1 = require('./fishes/fish1.gif');
const Fish2 = require('./fishes/fish2.gif');
const Fish3 = require('./fishes/fish3.gif');
const Fish4 = require('./fishes/fish4.gif');
const Fish5 = require('./fishes/fish5.gif');

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
