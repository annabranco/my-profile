import { combineReducers } from 'redux';
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
});

export default rootReducer;
