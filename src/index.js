import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/core/App';
import {
  TEXTS_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  FORMATION_PATH,
  EXPERIENCES_PATH,
  LANGUAGES_PATH
} from './constants';
import './styles/reset.css';
import ErrorComponent from './components/core/ErrorBoundary/ErrorComponent';

const APP_VERSION = 'v0.12.0';

const requestData = URL => {
  return axios
    .get(URL)
    .then(data => {
      return data.data;
    })
    .catch(error => console.error(`Failed to get data from ${URL}. ${error}.`));
};

const dataBasePaths = [
  TEXTS_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  FORMATION_PATH,
  EXPERIENCES_PATH,
  LANGUAGES_PATH
];

axios
  .all(dataBasePaths.map(path => requestData(path)))
  .then(
    axios.spread(
      (
        texts,
        dataProjects,
        dataSkills,
        dataFormation,
        dataExperiences,
        dataLanguages
      ) => {
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
  )
  .catch(error => {
    console.error(error);
    ReactDOM.render(
      <ErrorComponent
        error={`Fail when building up the application => ${error.message}`}
      />,
      document.getElementById('root')
    );
  });
