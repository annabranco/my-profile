import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/core/App';
import {
  TEXTS_PATH_PRE,
  TEXTS_PATH_PRO,
  PROJECTS_PATH_PRE,
  PROJECTS_PATH_PRO,
  SKILLS_PATH_PRO,
  FORMATION_PATH_PRO,
  EXPERIENCES_PATH_PRO,
  SKILLS_PATH_PRE,
  FORMATION_PATH_PRE,
  EXPERIENCES_PATH_PRE
} from './constants';
import './styles/styles.css';

const APP_VERSION = 'v0.10.0';

const fakeServer = process.env.REACT_APP_FAKE_SERVER === 'true';

const TEXTS_PATH = fakeServer ? TEXTS_PATH_PRE : TEXTS_PATH_PRO;
const PROJECTS_PATH = fakeServer ? PROJECTS_PATH_PRE : PROJECTS_PATH_PRO;
const SKILLS_PATH = fakeServer ? SKILLS_PATH_PRE : SKILLS_PATH_PRO;
const FORMATION_PATH = fakeServer ? FORMATION_PATH_PRE : FORMATION_PATH_PRO;
const EXPERIENCES_PATH = fakeServer
  ? EXPERIENCES_PATH_PRE
  : EXPERIENCES_PATH_PRO;

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
const loadSkills = fetchJson(SKILLS_PATH);
const loadFormation = fetchJson(FORMATION_PATH);
const loadExperiences = fetchJson(EXPERIENCES_PATH);

Promise.all([
  loadTexts,
  loadProjects,
  loadSkills,
  loadFormation,
  loadExperiences
])
  .then(([texts, dataProjects, dataSkills, dataFormation, dataExperiences]) => {
    ReactDOM.render(
      <App
        texts={texts}
        projects={dataProjects.projects}
        skills={dataSkills.skillGroups}
        formation={dataFormation.formation}
        experiences={dataExperiences.experiences}
        APP_VERSION={APP_VERSION}
      />,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.error(error);
    ReactDOM.render(<div>Sorry</div>, document.getElementById('root'));
  });
