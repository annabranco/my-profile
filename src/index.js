import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/core/App';
import {
  TEXTS_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  FORMATION_PATH,
  EXPERIENCES_PATH,
  LANGUAGES_PATH
} from './constants';
import './styles/styles.css';

const APP_VERSION = 'v0.10.0';

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
const loadLanguages = fetchJson(LANGUAGES_PATH);

Promise.all([
  loadTexts,
  loadProjects,
  loadSkills,
  loadFormation,
  loadExperiences,
  loadLanguages
])
  .then(
    ([
      texts,
      dataProjects,
      dataSkills,
      dataFormation,
      dataExperiences,
      dataLanguages
    ]) => {
      ReactDOM.render(
        <App
          texts={texts}
          projects={dataProjects.projects}
          skills={dataSkills.skillGroups}
          formation={dataFormation.formation}
          experiences={dataExperiences.experiences}
          languages={dataLanguages.languages}
          APP_VERSION={APP_VERSION}
        />,
        document.getElementById('root')
      );
    }
  )
  .catch(error => {
    console.error(error);
    ReactDOM.render(<div>Sorry</div>, document.getElementById('root'));
  });
