import axios from 'axios';
import { AnyAction, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  IAppState,
  IExperiencesType,
  IFormation,
  ILanguage,
  IProjects,
  IServerResponse,
  ISkillGroups,
  ITextsData
} from '../types/interfaces';
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

const store: Store<IAppState> = getStore();

const dispatchReduxAction = (
  URL: string,
  request: Promise<
    | IExperiencesType[]
    | IFormation[]
    | ILanguage[]
    | IProjects[]
    | ISkillGroups[]
    | ITextsData
  >
) => {
  switch (URL) {
    case EXPERIENCES_PATH:
      return (store.dispatch as ThunkDispatch<IAppState, unknown, AnyAction>)(
        loadExperiences(request as Promise<IExperiencesType[]>)
      ); // [*]
    case FORMATION_PATH:
      return (store.dispatch as ThunkDispatch<IAppState, unknown, AnyAction>)(
        loadFormation(request as Promise<IFormation[]>)
      );
    case LANGUAGES_PATH:
      return (store.dispatch as ThunkDispatch<IAppState, unknown, AnyAction>)(
        loadLanguages(request as Promise<ILanguage[]>)
      );
    case PROJECTS_PATH:
      return (store.dispatch as ThunkDispatch<IAppState, unknown, AnyAction>)(
        loadProjects(request as Promise<IProjects[]>)
      );
    case SKILLS_PATH:
      return (store.dispatch as ThunkDispatch<IAppState, unknown, AnyAction>)(
        loadSkills(request as Promise<ISkillGroups[]>)
      );
    case TEXTS_PATH:
      return (store.dispatch as ThunkDispatch<ITextsData, unknown, AnyAction>)(
        loadTexts(request as Promise<ITextsData>)
      );
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
      .then(data => data.data)
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
