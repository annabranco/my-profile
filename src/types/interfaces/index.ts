/* eslint-disable no-use-before-define */

export interface AppState {
  currentSection: string;
  experiences: ExperiencesType[] | [];
  finishedScenario: boolean;
  formation: FormationType[] | [];
  language: LanguageCode;
  languages: LanguageType[] | [];
  projects: ProjectsType[] | [];
  skills: SkillGroupsType[] | [];
  texts: TextsType | Record<string, never>;
  textsDatabase: TextsData | Record<string, never>;
}

interface BasicObjectInterface {
  [key: string]: string;
}

export type Country = 'br' | 'es' | 'fr' | 'gr' | 'ie' | 'ru' | 'us';

interface CountryType {
  en: string;
  es: string;
  pt: string;
  fr?: string;
  countryCode: Country;
}

export interface DeveloperTextType {
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

export interface ErrorTextType {
  errorLine1: string;
  errorLine2: string;
  notifyMe: string;
  title: string;
}

export interface ExperiencesData {
  experiences: ExperiencesType[];
}

export interface ExperiencesType {
  company: string;
  country: CountryType;
  dateBegin: string;
  dateBeginValue: number;
  dateEnd: string;
  dateEndValue: number;
  details: LanguagesType;
  id: string;
  place: string;
  title: LanguagesType;
  visible: boolean;
}

export interface IFish {
  facing: string;
  img: string;
  waving: boolean;
}
export interface FormationData {
  formation: FormationType[];
}

export interface FormationType {
  country: CountryType;
  dateBegin: string;
  dateBeginValue: number;
  dateEnd: string;
  dateEndValue: number;
  grade: number;
  gradeText: LanguagesType;
  id: string;
  place: string;
  title: LanguagesType;
  university: string;
  visible: boolean;
}

export interface FormationTextType {
  brazil: string;
  grade: string;
  ir: string;
  master: string;
  psy: string;
  spain: string;
}

export interface GlobalTextsType {
  open: string;
  close: string;
  since: string;
}

export interface HeaderTextType {
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
export interface InfoPageTextType {
  aditional: string;
  advise: string;
  call: string;
  chat: string;
  job: string;
  thankyou: string;
}

export interface InstructionsTextType {
  swipe: string;
  button: string;
  buttonText: string;
}

export interface LanguagesTextType {
  changeDefault: string;
  changeUpperBar: string;
  chekboxText: string;
  language: string;
  languageCode: LanguageCode;
  readingLanguage: string;
}

export type LanguageCode = 'en' | 'es' | 'pt' | 'fr';

export interface LanguagesData {
  languages: LanguagesType[];
}

export interface LanguagePreferences {
  language: LanguageCode;
  hideLanguagesModalForever: boolean;
}

export interface ILanguagesSpoken {
  language: string;
  speak: string;
  read: string;
  write: string;
  flagCode: Country;
}

export interface LanguageType {
  active: boolean;
  flagCode: Country;
  language: string;
  languageCode: LanguageCode;
  languageEn: string;
  order: number;
}

export interface LanguagesType {
  en: string;
  es: string;
  pt: string;
  fr: string;
}

export interface OtherSkillsTextType {
  design: string;
  find: string;
  find2: string;
  investigate: string;
  languages: string;
  languagesSpoken: ILanguagesSpoken[];
  other: string;
  samples: string;
  skills: ISkill[];
}

export interface ISkill {
  skill: string;
  details: string;
}

export interface PositionType {
  frame: string;
  position: string;
}

export interface ProjectsData {
  projects: ProjectsType[];
}

export interface IProjectsIndexator {
  projects: ProjectsType[][];
  totalPages: number;
}

export interface ProjectsType {
  description: LanguagesType;
  order: number;
  repo: string;
  thumbnail: string;
  title: string;
  url: string;
}

export interface SectionsTextType extends BasicObjectInterface {
  experience: string;
  other: string;
  projects: string;
  technical: string;
}

export interface SeabedElementsType {
  active: boolean;
  read: boolean;
  visible: boolean;
}

export interface SeabedTextType {
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

export interface SkillType {
  extended: boolean;
  level: number;
  logo?: string;
  order: number;
  skill: string;
}

export interface SkillsData {
  skillGroups: SkillGroupsType[];
}

export interface SkillGroupsType {
  globalLevel: number;
  logo: string;
  name: string;
  order: number;
  skills: SkillType[];
}

export type Style =
  | 'flat'
  | 'flat3d'
  | 'round'
  | 'round3d'
  | 'heart'
  | 'square'
  | 'wave';

export interface TextsData {
  en: TextsType;
  es: TextsType;
  fr: TextsType;
  pt: TextsType;
}

export interface TextsType {
  developer: DeveloperTextType;
  error: ErrorTextType;
  global: GlobalTextsType;
  header: HeaderTextType;
  infoPage: InfoPageTextType;
  instructions: InstructionsTextType;
  languages: LanguagesTextType;
  otherSkills: OtherSkillsTextType;
  seabed: SeabedTextType;
  sections: SectionsTextType;
}

export interface IThinkingState {
  side: string;
  thoughts: number;
}

export interface ServerResponse {
  dataExperiences: ExperiencesData;
  dataFormation: FormationData;
  dataLanguages: LanguagesData;
  dataProjects: ProjectsData;
  dataSkills: SkillsData;
  texts: TextsData;
}
