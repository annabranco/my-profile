/* eslint-disable no-use-before-define */

export interface AppState {
  currentSection: string;
  experiences: ExperiencesData | [];
  finishedScenario: boolean;
  formation: FormationData | [];
  language: string;
  languages: LanguagesData | [];
  projects: ProjectsData | [];
  skills: SkillsData | [];
  texts: TextsType | Record<string, never>;
  textsDatabase: TextsData | Record<string, never>;
}

export type Country = 'br' | 'es' | 'fr' | 'gr' | 'ie' | 'ru' | 'us';

interface CountryType {
  en: string;
  es: string;
  pt: string;
  countryCode: string;
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

export interface FlagAttributes {
  country: Country;
  style: Style;
  size?: string;
}

export interface FormationData {
  formation: FormationType[];
}

export interface FormationType {
  country: LanguagesType;
  countryCode: string;
  dateBegin: string;
  dateBeginValue: number;
  dateEnd: string;
  dateEndValue: number;
  grade: number;
  gradeText: LanguagesType;
  id: string;
  place: string;
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
  languageCode: string;
  readingLanguage: string;
}

export type LanguageCode = 'en' | 'es' | 'pt' | 'fr';

export interface LanguagesData {
  languages: LanguagesType[];
}

export interface LanguagePreferences {
  language: string;
  hideLanguagesModalForever: boolean;
}

export interface LanguageType {
  active: boolean;
  flagCode: string;
  language: string;
  languageCode: string;
  languageEn: string;
  order: number;
}

interface LanguagesType {
  en: string;
  es: string;
  pt: string;
  fr: string;
}

export interface OtherSkillsTextType {
  basic: string;
  design: string;
  english: string;
  find: string;
  find2: string;
  fluent: string;
  french: string;
  how: string;
  intermediate: string;
  investigate: string;
  languages: string;
  other: string;
  portuguese: string;
  russian: string;
  samples: string;
  skill: string;
  skill1: string;
  skill1details: string;
  skill2: string;
  skill2details: string;
  skill3: string;
  skill3details: string;
  skill4: string;
  skill4details: string;
  skill5: string;
  skill5details: string;
  spanish: string;
}

export interface PositionType {
  frame: string;
  position: string;
}

export interface ProjectsData {
  projects: ProjectsType[];
}

export interface ProjectsType {
  description: LanguagesType;
  order: number;
  repo: string;
  thumbnail: string;
  url: string;
}

export interface SectionsTextType {
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
  order: number;
  level: number;
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

export interface ServerResponse {
  dataExperiences: ExperiencesData;
  dataFormation: FormationData;
  dataLanguages: LanguagesData;
  dataProjects: ProjectsData;
  dataSkills: SkillsData;
  texts: TextsData;
}
