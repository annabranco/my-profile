import PropTypes from 'prop-types';

export const projectsPropType = PropTypes.shape({
  description: PropTypes.shape({
    en: PropTypes.string.isRequired,
    es: PropTypes.string.isRequired,
    pt: PropTypes.string.isRequired
  }).isRequired,
  order: PropTypes.number.isRequired,
  repo: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
});

export const developerTextPropType = PropTypes.shape({
  adalabMore: PropTypes.string.isRequired,
  adalabText: PropTypes.string.isRequired,
  expanded: PropTypes.string.isRequired,
  formation: PropTypes.string.isRequired,
  goUp: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  projects: PropTypes.string.isRequired,
  projectsText: PropTypes.string.isRequired,
  reduced: PropTypes.string.isRequired,
  showMore: PropTypes.string.isRequired,
  showThumbnails: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const experiencesTextPropType = PropTypes.shape({
  brazil: PropTypes.string.isRequired,
  eru: PropTypes.string.isRequired,
  eruDetails: PropTypes.string.isRequired,
  find: PropTypes.string.isRequired,
  ict: PropTypes.string.isRequired,
  ictDetails: PropTypes.string.isRequired,
  investigate: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  spain: PropTypes.string.isRequired,
  tj: PropTypes.string.isRequired,
  tjDetails: PropTypes.string.isRequired
});

export const formationTextPropType = PropTypes.shape({
  brazil: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  ir: PropTypes.string.isRequired,
  master: PropTypes.string.isRequired,
  psy: PropTypes.string.isRequired,
  spain: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const headerTextPropType = PropTypes.shape({
  contact: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const infoPageTextPropType = PropTypes.shape({
  aditional: PropTypes.string.isRequired,
  advise: PropTypes.string.isRequired,
  call: PropTypes.string.isRequired,
  chat: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  thankyou: PropTypes.string.isRequired
});

export const languagesTextPropType = PropTypes.shape({
  changeDefault: PropTypes.string.isRequired,
  changeUpperBar: PropTypes.string.isRequired,
  chekboxText: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  languageCode: PropTypes.string.isRequired,
  readingLanguage: PropTypes.string.isRequired
});

export const otherSkillsTextPropType = PropTypes.shape({
  basic: PropTypes.string.isRequired,
  design: PropTypes.string.isRequired,
  english: PropTypes.string.isRequired,
  find: PropTypes.string.isRequired,
  find2: PropTypes.string.isRequired,
  fluent: PropTypes.string.isRequired,
  french: PropTypes.string.isRequired,
  how: PropTypes.string.isRequired,
  intermediate: PropTypes.string.isRequired,
  investigate: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  portuguese: PropTypes.string.isRequired,
  russian: PropTypes.string.isRequired,
  samples: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  skill1: PropTypes.string.isRequired,
  skill1details: PropTypes.string.isRequired,
  skill2: PropTypes.string.isRequired,
  skill2details: PropTypes.string.isRequired,
  skill3: PropTypes.string.isRequired,
  skill3details: PropTypes.string.isRequired,
  skill4: PropTypes.string.isRequired,
  skill4details: PropTypes.string.isRequired,
  skill5: PropTypes.string.isRequired,
  skill5details: PropTypes.string.isRequired,
  spanish: PropTypes.string.isRequired
});

export const seabedTextPropType = PropTypes.shape({
  experiences: PropTypes.string.isRequired,
  find: PropTypes.string.isRequired,
  find2: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  messageKeyboard: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  thoughts: PropTypes.arrayOf(PropTypes.string.isRequired),
  time2go: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const globalTextsPropType = PropTypes.shape({
  open: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired
});

export const textsPropType = PropTypes.shape({
  developer: developerTextPropType.isRequired,
  experiences: experiencesTextPropType.isRequired,
  formation: formationTextPropType.isRequired,
  global: globalTextsPropType.isRequired,
  header: headerTextPropType.isRequired,
  infoPage: infoPageTextPropType.isRequired,
  languages: languagesTextPropType.isRequired,
  otherSkills: otherSkillsTextPropType.isRequired,
  seabed: seabedTextPropType.isRequired
});

export const developerActivationPropType = PropTypes.shape({
  adalab: PropTypes.bool.isRequired,
  projects: PropTypes.bool.isRequired,
  skills: PropTypes.bool.isRequired
});

export const formationActivationPropType = PropTypes.shape({
  psychology: PropTypes.bool.isRequired,
  ir: PropTypes.bool.isRequired,
  master: PropTypes.bool.isRequired,
  programming: PropTypes.bool.isRequired
});

export const seabedElementsPropType = PropTypes.shape({
  active: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  read: PropTypes.bool.isRequired
});
