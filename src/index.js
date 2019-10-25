import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { App } from './components/containers';

const APP_VERSION = 'v0.9.0';

const TEXTS_URL =
  'https://raw.githubusercontent.com/annabranco/my-profile/feature/technical_review/src/db/texts.json';

const PROJECTS_URL =
  'https://raw.githubusercontent.com/annabranco/my-profile/feature/technical_review/src/db/projectsDB.json';

const fetchJson = URL => {
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log('$$$ data', data);
      return data;
    })
    .catch(error => console.error('Failed to fetch:', URL, error));
};

const loadTexts = fetchJson(TEXTS_URL);
const loadProjects = fetchJson(PROJECTS_URL);

Promise.all([loadTexts, loadProjects])
  .then(([texts, projects]) => {
    ReactDOM.hydrate(
      <App texts={texts} projects={projects} APP_VERSION={APP_VERSION} />,
      document.getElementById('root')
    );
  })
  .catch(error => console.error(error));
