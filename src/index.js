import React from 'react';
import ReactDOM from 'react-dom';
import {
  TEXTS_PATH_PRE,
  TEXTS_PATH_PRO,
  PROJECTS_PATH_PRE,
  PROJECTS_PATH_PRO
} from './constants';
import { App } from './components/core/App';
import './styles/styles.css';

const APP_VERSION = 'v0.10.0';

const envIsDev = process.env.NODE_ENV === 'development';
const TEXTS_PATH = envIsDev ? TEXTS_PATH_PRE : TEXTS_PATH_PRO;
const PROJECTS_PATH = envIsDev ? PROJECTS_PATH_PRE : PROJECTS_PATH_PRO;

const fetchJson = URL => {
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log('$$$ data', data);
      return data;
    })
    .catch(error => console.error(`Failed to get data from ${URL}. ${error}.`));
};

const loadTexts = fetchJson(TEXTS_PATH);
const loadProjects = fetchJson(PROJECTS_PATH);

Promise.all([loadTexts, loadProjects])
  .then(([texts, data]) => {
    ReactDOM.render(
      <App texts={texts} projects={data.projects} APP_VERSION={APP_VERSION} />,
      document.getElementById('root')
    );
  })
  .catch(error => console.error(error));
