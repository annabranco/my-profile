import config from '../config';
import { INFO_PAGE_SECTION } from '../constants';
import { getLanguageCodeByName } from '../utils/languages';
import { AppState, LanguagePreferences } from '../types/interfaces';

const languageSettings: LanguagePreferences | Record<string, never> =
  JSON.parse(
    localStorage.getItem("Anna Branco's professional profile") as string
  ) || {};

export const INITIAL_STATE: AppState = {
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
