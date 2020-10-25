import axios from 'axios';
import {
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
} from '../constants';
import { loadExperiences } from '../redux/actions/experiences';
import { loadFormation } from '../redux/actions/formation';
import { loadLanguages } from '../redux/actions/languages';
import { loadProjects } from '../redux/actions/projects';
import { loadSkills } from '../redux/actions/skills';
import { loadTexts } from '../redux/actions/texts';

const dispatchReduxAction = (URL, request) => {
  switch (URL) {
    case EXPERIENCES_PATH:
      return loadExperiences(request);
    case FORMATION_PATH:
      return loadFormation(request);
    case LANGUAGES_PATH:
      return loadLanguages(request);
    case PROJECTS_PATH:
      return loadProjects(request);
    case SKILLS_PATH:
      return loadSkills(request);
    case TEXTS_PATH:
      return loadTexts(request);
    default:
      return null;
  }
};

export const dispatchFetchDatabase = dataBasePaths => {
  const requestData = URL => {
    const request = axios
      .get(URL)
      .then(data => {
        return data.data;
      })
      .catch(error =>
        console.error(`Failed to get data from ${URL}. ${error}.`)
      );
    dispatchReduxAction(URL, request);
    return request;
  };

  return axios
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
        ) => ({
          dataExperiences,
          dataFormation,
          dataLanguages,
          dataProjects,
          dataSkills,
          texts
        })
      )
    )
    .catch(error => console.error(`Failed to get database. ${error}.`));
};
