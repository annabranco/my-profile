import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/core/App';
import ErrorComponent from './components/core/ErrorBoundary/ErrorComponent';
import {
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
} from './constants';
import './styles/reset.css';

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
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
];

axios
  .all(dataBasePaths.map(path => requestData(path)))
  .then(
    axios.spread(
      (
        dataExperiences,
        dataFormation,
        dataLanguages,
        dataProjects,
        dataSkills,
        texts
      ) => {
        ReactDOM.render(
          <App
            APP_VERSION={APP_VERSION}
            experiences={dataExperiences.experiences}
            formation={dataFormation.formation}
            languages={dataLanguages.languages}
            projects={dataProjects.projects}
            skills={dataSkills.skillGroups}
            texts={texts}
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
