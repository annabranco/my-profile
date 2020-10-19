import { string, shape, number, arrayOf, bool } from 'prop-types';

const textInAllLanguagesPropType = shape({
  en: string.isRequired,
  es: string.isRequired,
  pt: string.isRequired
});

export const projectsPropType = shape({
  description: textInAllLanguagesPropType.isRequired,
  order: number.isRequired,
  repo: string.isRequired,
  thumbnail: string.isRequired,
  url: string.isRequired
});

export const developerTextPropType = shape({
  adalabMore: string.isRequired,
  adalabText: string.isRequired,
  expanded: string.isRequired,
  formation: string.isRequired,
  goUp: string.isRequired,
  main: string.isRequired,
  more: string.isRequired,
  other: string.isRequired,
  projects: string.isRequired,
  projectsText: string.isRequired,
  reduced: string.isRequired,
  showMore: string.isRequired,
  showThumbnails: string.isRequired
});

export const experiencesTextPropType = shape({
  brazil: string.isRequired,
  eru: string.isRequired,
  eruDetails: string.isRequired,
  find: string.isRequired,
  ict: string.isRequired,
  ictDetails: string.isRequired,
  investigate: string.isRequired,
  linkedin: string.isRequired,
  spain: string.isRequired,
  tj: string.isRequired,
  tjDetails: string.isRequired
});

export const formationTextPropType = shape({
  brazil: string.isRequired,
  grade: string.isRequired,
  ir: string.isRequired,
  master: string.isRequired,
  psy: string.isRequired,
  spain: string.isRequired
});

export const headerTextPropType = shape({
  contact: string.isRequired,
  title: string.isRequired
});

export const infoPageTextPropType = shape({
  aditional: string.isRequired,
  advise: string.isRequired,
  call: string.isRequired,
  chat: string.isRequired,
  job: string.isRequired,
  thankyou: string.isRequired
});

export const languagesTextPropType = shape({
  changeDefault: string.isRequired,
  changeUpperBar: string.isRequired,
  chekboxText: string.isRequired,
  language: string.isRequired,
  languageCode: string.isRequired,
  readingLanguage: string.isRequired
});

export const otherSkillsTextPropType = shape({
  basic: string.isRequired,
  design: string.isRequired,
  english: string.isRequired,
  find: string.isRequired,
  find2: string.isRequired,
  fluent: string.isRequired,
  french: string.isRequired,
  how: string.isRequired,
  intermediate: string.isRequired,
  investigate: string.isRequired,
  languages: string.isRequired,
  other: string.isRequired,
  portuguese: string.isRequired,
  russian: string.isRequired,
  samples: string.isRequired,
  skill: string.isRequired,
  skill1: string.isRequired,
  skill1details: string.isRequired,
  skill2: string.isRequired,
  skill2details: string.isRequired,
  skill3: string.isRequired,
  skill3details: string.isRequired,
  skill4: string.isRequired,
  skill4details: string.isRequired,
  skill5: string.isRequired,
  skill5details: string.isRequired,
  spanish: string.isRequired
});

export const seabedTextPropType = shape({
  experiences: string.isRequired,
  find: string.isRequired,
  find2: string.isRequired,
  message: string.isRequired,
  messageKeyboard: string.isRequired,
  skills: string.isRequired,
  thoughts: arrayOf(string.isRequired),
  time2go: string.isRequired
});

export const globalTextsPropType = shape({
  open: string.isRequired,
  close: string.isRequired,
  since: string.isRequired
});

export const errorTextsPropType = shape({
  errorLine1: string.isRequired,
  errorLine2: string.isRequired,
  notifyMe: string.isRequired,
  title: string.isRequired
});

export const textsPropType = shape({
  developer: developerTextPropType,
  experiences: experiencesTextPropType,
  error: errorTextsPropType,
  formation: formationTextPropType,
  global: globalTextsPropType,
  header: headerTextPropType,
  infoPage: infoPageTextPropType,
  languages: languagesTextPropType.isRequired,
  otherSkills: otherSkillsTextPropType,
  seabed: seabedTextPropType
});

export const allLanguagesTextsPropType = shape({
  en: textsPropType,
  es: textsPropType,
  fr: textsPropType,
  pt: textsPropType
});

export const seabedElementsPropType = shape({
  active: bool.isRequired,
  read: bool.isRequired,
  visible: bool.isRequired
});

export const skillPropType = shape({
  order: number.isRequired,
  level: number.isRequired,
  skill: string.isRequired
});

export const skillGroupsPropType = shape({
  order: number.isRequired,
  globalLevel: number.isRequired,
  logo: string.isRequired,
  name: string.isRequired,
  skills: arrayOf(skillPropType).isRequired
});

export const experiencesPropType = shape({
  company: string.isRequired,
  country: textInAllLanguagesPropType.isRequired,
  dateBegin: string.isRequired,
  dateBeginValue: number.isRequired,
  dateEnd: string,
  dateEndValue: number,
  details: textInAllLanguagesPropType.isRequired,
  id: string.isRequired,
  place: string.isRequired,
  visible: bool.isRequired
});

export const formationPropType = shape({
  country: textInAllLanguagesPropType.isRequired,
  countryCode: string.isRequired,
  dateBegin: string.isRequired,
  dateBeginValue: number.isRequired,
  dateEnd: string,
  dateEndValue: number,
  grade: number,
  gradeText: textInAllLanguagesPropType,
  id: string.isRequired,
  place: string.isRequired,
  university: string.isRequired,
  visible: bool.isRequired
});

export const languagesPropType = shape({
  active: bool.isRequired,
  flagCode: string.isRequired,
  language: string.isRequired,
  languageCode: string.isRequired,
  languageEn: string.isRequired,
  order: number.isRequired
});
