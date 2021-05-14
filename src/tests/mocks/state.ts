import {
  IAppState,
  IExperiencesType,
  IFormation,
  ILanguage,
  IProjects,
  ISkillGroups,
  ITexts,
  ITextsData,
  ILanguageCode
} from '../../types/interfaces/index';
import experiences from '../../db/experiences.json';
import formation from '../../db/formation.json';
import languages from '../../db/languages.json';
import projects from '../../db/projectsDB.json';
import skills from '../../db/skills.json';
import textsDatabase from '../../db/texts.json';

interface LanguageProps {
  language: ILanguageCode;
}

export default ({ language }: LanguageProps): IAppState => {
  return {
    currentSection: 'main',
    experiences: experiences as IExperiencesType[],
    finishedScenario: false,
    formation: formation as IFormation[],
    language: language as ILanguageCode,
    languages: languages as ILanguage[],
    projects: projects as IProjects[],
    skills: skills as ISkillGroups[],
    texts: textsDatabase[language] as ITexts,
    textsDatabase: textsDatabase as ITextsData
  };
};
