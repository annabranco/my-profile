import config from '../config';
import { INFO_PAGE_SECTION } from '../constants';
import { getLanguageCodeByName } from '../utils/languages';
import { IAppState, ILanguagePreferences } from '../types/interfaces';

const languageSettings: ILanguagePreferences | Record<string, never> =
  JSON.parse(
    localStorage.getItem("Anna Branco's professional profile") as string
  ) || {};

export const INITIAL_STATE: IAppState = {
  currentSection: INFO_PAGE_SECTION,
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
  textsDatabase: {}
};
