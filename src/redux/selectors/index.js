import { createSelector } from 'reselect';

export const allLanguagesSelector = state => state.languages;
export const currentLanguageSelector = state => state.language;
export const experiencesSelector = state => state.experiences;
export const finishedSelector = state => state.finishedScenario;
export const formationSelector = state => state.formation;
export const projectsSelector = state => state.projects;
export const skillsSelector = state => state.skills;
export const currentSecionSelector = state => state.currentSection;

const getTexts = state => state.texts;

export const developerTextSelector = createSelector(
  [getTexts],
  texts => texts.developer
);
export const globalTextsSelector = createSelector(
  [getTexts],
  texts => texts.global
);
export const headerTitleSelector = createSelector(
  [getTexts],
  texts => texts.header && texts.header.title
);
export const infoPageTextSelector = createSelector(
  [getTexts],
  texts => texts.infoPage
);
export const languagesModelTextsSelector = createSelector(
  [getTexts],
  texts => texts.languages
);
export const otherSkillsTextSelector = createSelector(
  [getTexts],
  texts => texts.otherSkills
);
export const seabedTextsSelector = createSelector(
  [getTexts],
  texts => texts.seabed
);
export const secionsTextsSelector = createSelector(
  [getTexts],
  texts => texts.sections
);
