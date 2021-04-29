import { createSelector } from 'reselect';
import {
  IAppState,
  IDeveloperText,
  IGlobalTexts,
  IInfoPageText,
  IInstructionsText,
  ILanguagesText,
  IOtherSkillsText,
  ISeabedText,
  ISectionsText
} from '../../types/interfaces';

export const allLanguagesSelector = (
  state: IAppState
): IAppState['languages'] => state.languages;
export const currentLanguageSelector = (
  state: IAppState
): IAppState['language'] => state.language;
export const experiencesSelector = (
  state: IAppState
): IAppState['experiences'] => state.experiences;
export const finishedSelector = (
  state: IAppState
): IAppState['finishedScenario'] => state.finishedScenario;
export const formationSelector = (state: IAppState): IAppState['formation'] =>
  state.formation;
export const projectsSelector = (state: IAppState): IAppState['projects'] =>
  state.projects;
export const skillsSelector = (state: IAppState): IAppState['skills'] =>
  state.skills;
export const currentSecionSelector = (
  state: IAppState
): IAppState['currentSection'] => state.currentSection;

const getTexts = (state: IAppState): IAppState['texts'] => state.texts;

export const developerTextSelector = createSelector<
  IAppState,
  IAppState['texts'],
  IDeveloperText
>([getTexts], texts => texts.developer);
export const globalTextsSelector = createSelector<
  IAppState,
  IAppState['texts'],
  IGlobalTexts
>([getTexts], texts => texts.global);
export const headerTitleSelector = createSelector<
  IAppState,
  IAppState['texts'],
  string
>([getTexts], texts => texts.header && texts.header.title);
export const infoPageTextSelector = createSelector<
  IAppState,
  IAppState['texts'],
  IInfoPageText
>([getTexts], texts => texts.infoPage);
export const instructionsTextSelector = createSelector<
  IAppState,
  IAppState['texts'],
  IInstructionsText
>([getTexts], texts => texts.instructions);
export const languagesModelTextsSelector = createSelector<
  IAppState,
  IAppState['texts'],
  ILanguagesText
>([getTexts], texts => texts.languages);
export const otherSkillsTextSelector = createSelector<
  IAppState,
  IAppState['texts'],
  IOtherSkillsText
>([getTexts], texts => texts.otherSkills);
export const seabedTextsSelector = createSelector<
  IAppState,
  IAppState['texts'],
  ISeabedText
>([getTexts], texts => texts.seabed);
export const sectionsTextsSelector = createSelector<
  IAppState,
  IAppState['texts'],
  ISectionsText
>([getTexts], texts => texts.sections);
