import config from '../config';
import { INFO_PAGE_SECTION } from '../constants';
import { getLanguageCodeByName } from '../utils/languages';

const languageSettings =
  JSON.parse(localStorage.getItem("Anna Branco's professional profile")) || {};

export const INITIAL_STATE = {
  experiences: [],
  finishedScenario: false,
  formation: [],
  language:
    languageSettings.language ||
    getLanguageCodeByName(config.DEFAULT_PAGE_LANGUAGE),
  languages: [],
  projects: [],
  skills: [],
  texts: {},
  textsDatabase: {},
  currentSection: INFO_PAGE_SECTION
};
