import config from '../config';
import { getLanguageCodeByName } from '../utils/languages';

const languageSettings =
  JSON.parse(localStorage.getItem("Anna Branco's professional profile")) || {};

export const INITIAL_STATE = {
  experiences: [],
  formation: [],
  language:
    languageSettings.language ||
    getLanguageCodeByName(config.DEFAULT_PAGE_LANGUAGE),
  languages: [],
  projects: [],
  skills: [],
  texts: {},
  textsDatabase: {},
  finishedScenario: false
};
