import { combineReducers } from 'redux';
import {
  IPageSection,
  IExperiencesType,
  IFormation,
  ILanguageCode,
  ILanguage,
  IProjects,
  ISkillGroups,
  ITexts,
  ITextsData,
  IActionReducer
} from '../../types/interfaces/index';
import currentSection from './currentSection';
import experiences from './experiences';
import finishedScenario from './finishedScenario';
import formation from './formation';
import language from './language';
import languages from './languages';
import projects from './projects';
import skills from './skills';
import texts from './texts';
import textsDatabase from './textsDatabase';

interface RootReducer {
  currentSection: IActionReducer<IPageSection | undefined>;
  experiences: IActionReducer<IExperiencesType[] | [] | undefined>;
  finishedScenario: IActionReducer<boolean | undefined>;
  formation: IActionReducer<IFormation[] | [] | undefined>;
  language: IActionReducer<ILanguageCode | undefined>;
  languages: IActionReducer<ILanguage[] | [] | undefined>;
  projects: IActionReducer<IProjects[] | [] | undefined>;
  skills: IActionReducer<ISkillGroups[] | [] | undefined>;
  texts: IActionReducer<ITexts | Record<string, never> | undefined>;
  textsDatabase: IActionReducer<ITextsData | Record<string, never> | undefined>;
}

const rootReducer = combineReducers({
  currentSection,
  experiences,
  finishedScenario,
  formation,
  language,
  languages,
  projects,
  skills,
  texts,
  textsDatabase
} as RootReducer);

export default rootReducer;
