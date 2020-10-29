import { experiences } from '../../src/db/experiences.json';
import { formation } from '../../src/db/formation.json';
import { languages } from '../../src/db/languages.json';
import { projects } from '../../src/db/projectsDB.json';
import { skillGroups as skills } from '../../src/db/skills.json';
import textsDatabase from '../../src/db/texts.json';

export default ({ language }) => {
  return {
    experiences,
    finishedScenario: false,
    formation,
    language,
    languages,
    projects,
    skills,
    texts: textsDatabase[language],
    textsDatabase
  };
};
