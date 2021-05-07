/* eslint-disable no-use-before-define */

import { Dispatch } from 'redux';

interface IAction<T> {
  type: string;
  payload: T;
}

interface IActionRequest {
  type: string;
}

export type IActionDispatchFunction<T> = (payload: T) => IAction<T>;

export type IActionRequestFunction = () => IActionRequest;

export type IActionDispatchFunctionWithRequest<T> = (
  request: Promise<T>
) => (dispatch: Dispatch) => void;

export type IActionReducer<T> = (state: T, action: IAction<T>) => T;

export interface IAppState {
  currentSection: IPageSection;
  experiences: IExperiencesType[] | [];
  finishedScenario: boolean;
  formation: IFormation[] | [];
  language: ILanguageCode;
  languages: ILanguage[] | [];
  projects: IProjects[] | [];
  skills: ISkillGroups[] | [];
  texts: ITexts | Record<string, never>;
  textsDatabase: ITextsData | Record<string, never>;
}

interface IBasicObject {
  [key: string]: string;
}

export type ICountry = 'br' | 'es' | 'fr' | 'gr' | 'ie' | 'ru' | 'us';

interface ICountryType {
  en: string;
  es: string;
  pt: string;
  fr?: string;
  countryCode: ICountry;
}

export interface IDeveloperText {
  expanded: string;
  formation: string;
  goUp: string;
  main: string;
  other: string;
  projects: string;
  projectsText: string;
  reduced: string;
  showMore: string;
  showThumbnails: string;
}

export interface IErrorText {
  errorLine1: string;
  errorLine2: string;
  notifyMe: string;
  title: string;
}

export interface IExperiencesData {
  experiences: IExperiencesType[];
}

export interface IExperiencesType {
  company: string;
  country: ICountryType;
  dateBegin: string;
  dateBeginValue: number;
  dateEnd: string;
  dateEndValue: number;
  details: ILanguages;
  id: string;
  place: string;
  title: ILanguages;
  visible: boolean;
}

export interface IFish {
  facing: string;
  img: string;
  waving: boolean;
}
export interface IFormationData {
  formation: IFormation[];
}

export interface IFormation {
  country: ICountryType;
  dateBegin: string;
  dateBeginValue: number;
  dateEnd: string;
  dateEndValue: number;
  grade: number;
  gradeText: ILanguages;
  id: string;
  place: string;
  title: ILanguages;
  university: string;
  visible: boolean;
}

export interface IFormationText {
  brazil: string;
  grade: string;
  ir: string;
  master: string;
  psy: string;
  spain: string;
}

export interface IGlobalTexts {
  open: string;
  close: string;
  since: string;
}

export interface IHeaderText {
  contact: string;
  title: string;
}

export interface IHeroMovement {
  back2Surface: boolean;
  crossingBorder: boolean;
  facing: string;
  isGoingUp: boolean;
  isSwimming: boolean;
}
export interface IInfoPageText {
  aditional: string;
  advise: string;
  call: string;
  chat: string;
  job: string;
  thankyou: string;
}

export interface IInstructionsText {
  swipe: string;
  button: string;
  buttonText: string;
}

export interface ILanguagesText {
  changeDefault: string;
  changeUpperBar: string;
  chekboxText: string;
  language: string;
  languageCode: ILanguageCode;
  readingLanguage: string;
}

export type ILanguageCode = 'en' | 'es' | 'pt' | 'fr';

export interface ILanguagesData {
  languages: ILanguages[];
}

export interface ILanguagePreferences {
  language: ILanguageCode;
  hideLanguagesModalForever: boolean;
}

export interface ILanguagesSpoken {
  language: string;
  speak: string;
  read: string;
  write: string;
  flagCode: ICountry;
}

export interface ILanguage {
  active: boolean;
  flagCode: ICountry;
  language: string;
  languageCode: ILanguageCode;
  languageEn: string;
  order: number;
}

export interface ILanguages {
  en: string;
  es: string;
  pt: string;
  fr: string;
}

export interface IOtherSkill {
  skill: string;
  details: string;
}

export interface IOtherSkillsText {
  design: string;
  find: string;
  find2: string;
  investigate: string;
  languages: string;
  languagesSpoken: ILanguagesSpoken[];
  other: string;
  samples: string;
  skills: IOtherSkill[];
}

export type IPageSection =
  | 'main'
  | 'technical'
  | 'projects'
  | 'experience'
  | 'formation'
  | 'other';

export interface IPosition {
  frame: string;
  position: string;
}

export interface IProjectsData {
  projects: IProjects[];
}

export interface IProjectsIndexator {
  projects: IProjects[][];
  totalPages: number;
}

export interface IProjects {
  description: ILanguages;
  order: number;
  repo: string;
  thumbnail: string;
  title: string;
  url: string;
}

export interface ISectionsText extends IBasicObject {
  experience: string;
  other: string;
  projects: string;
  technical: string;
}

export interface ISeabedElements {
  active: boolean;
  read: boolean;
  visible: boolean;
}

export interface ISeabedText {
  formation: string;
  find: string;
  find2: string;
  findMore: string;
  investigate: string;
  linkedin: string;
  message: string;
  messageKeyboard: string;
  skills: string;
  thoughts: string[];
  time2go: string;
}

export interface IServerResponse {
  dataExperiences: IExperiencesData;
  dataFormation: IFormationData;
  dataLanguages: ILanguagesData;
  dataProjects: IProjectsData;
  dataSkills: ISkillsData;
  texts: ITextsData;
}

export interface ISkill {
  extended: boolean;
  level: number;
  logo?: string;
  order: number;
  skill: string;
}

export interface ISkillsData {
  skillGroups: ISkillGroups[];
}

export interface ISkillGroups {
  globalLevel: number;
  logo: string;
  name: string;
  order: number;
  skills: ISkill[];
}

export type IStyle =
  | 'flat'
  | 'flat3d'
  | 'round'
  | 'round3d'
  | 'heart'
  | 'square'
  | 'wave';

export interface ITexts {
  developer: IDeveloperText;
  error: IErrorText;
  global: IGlobalTexts;
  header: IHeaderText;
  infoPage: IInfoPageText;
  instructions: IInstructionsText;
  languages: ILanguagesText;
  otherSkills: IOtherSkillsText;
  seabed: ISeabedText;
  sections: ISectionsText;
}

export interface ITextsFrench {
  languages: ILanguagesText;
}
export interface ITextsData {
  en: ITexts;
  es: ITexts;
  fr: ITexts;
  pt: ITexts;
}

export interface IThinkingState {
  side: string;
  thoughts: number;
}
