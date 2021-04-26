import { createSelector } from 'reselect';
import {
  AppState,
  DeveloperTextType,
  GlobalTextsType,
  InfoPageTextType,
  InstructionsTextType,
  LanguagesTextType,
  OtherSkillsTextType,
  SeabedTextType,
  SectionsTextType
} from '../../types/interfaces';

export const allLanguagesSelector = (state: AppState): AppState['languages'] =>
  state.languages;
export const currentLanguageSelector = (
  state: AppState
): AppState['language'] => state.language;
export const experiencesSelector = (state: AppState): AppState['experiences'] =>
  state.experiences;
export const finishedSelector = (
  state: AppState
): AppState['finishedScenario'] => state.finishedScenario;
export const formationSelector = (state: AppState): AppState['formation'] =>
  state.formation;
export const projectsSelector = (state: AppState): AppState['projects'] =>
  state.projects;
export const skillsSelector = (state: AppState): AppState['skills'] =>
  state.skills;
export const currentSecionSelector = (
  state: AppState
): AppState['currentSection'] => state.currentSection;

const getTexts = (state: AppState): AppState['texts'] => state.texts;

export const developerTextSelector = createSelector<
  AppState,
  AppState['texts'],
  DeveloperTextType
>([getTexts], texts => texts.developer);
export const globalTextsSelector = createSelector<
  AppState,
  AppState['texts'],
  GlobalTextsType
>([getTexts], texts => texts.global);
export const headerTitleSelector = createSelector<
  AppState,
  AppState['texts'],
  string
>([getTexts], texts => texts.header && texts.header.title);
export const infoPageTextSelector = createSelector<
  AppState,
  AppState['texts'],
  InfoPageTextType
>([getTexts], texts => texts.infoPage);
export const instructionsTextSelector = createSelector<
  AppState,
  AppState['texts'],
  InstructionsTextType
>([getTexts], texts => texts.instructions);
export const languagesModelTextsSelector = createSelector<
  AppState,
  AppState['texts'],
  LanguagesTextType
>([getTexts], texts => texts.languages);
export const otherSkillsTextSelector = createSelector<
  AppState,
  AppState['texts'],
  OtherSkillsTextType
>([getTexts], texts => texts.otherSkills);
export const seabedTextsSelector = createSelector<
  AppState,
  AppState['texts'],
  SeabedTextType
>([getTexts], texts => texts.seabed);
export const sectionsTextsSelector = createSelector<
  AppState,
  AppState['texts'],
  SectionsTextType
>([getTexts], texts => texts.sections);
