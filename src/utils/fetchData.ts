import axios from 'axios';
import { getStore } from '../redux';
import { loadExperiences } from '../redux/actions/experiences';
import { loadFormation } from '../redux/actions/formation';
import { loadLanguages } from '../redux/actions/languages';
import { loadProjects } from '../redux/actions/projects';
import { loadSkills } from '../redux/actions/skills';
import { loadTexts } from '../redux/actions/texts';
import {
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
} from '../constants';
import { IServerResponse } from '../types/interfaces';

const store = getStore();

const dispatchReduxAction = <T>(URL: string, request: T) => {
  switch (URL) {
    case EXPERIENCES_PATH:
      return store.dispatch(loadExperiences(request));
    case FORMATION_PATH:
      return store.dispatch(loadFormation(request));
    case LANGUAGES_PATH:
      return store.dispatch(loadLanguages(request));
    case PROJECTS_PATH:
      return store.dispatch(loadProjects(request));
    case SKILLS_PATH:
      return store.dispatch(loadSkills(request));
    case TEXTS_PATH:
      return store.dispatch(loadTexts(request));
    default:
      return null;
  }
};

export const dispatchFetchDatabase = (
  dataBasePaths: string[]
): Promise<void | IServerResponse> => {
  const requestData = (URL: string) => {
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
