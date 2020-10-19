const HOST_PRO =
  'https://raw.githubusercontent.com/annabranco/my-profile/dev/src/db';
const HOST_PRE = 'http://localhost:3031';

const isDevelopment = process.env.REACT_APP_DEV_SERVER === 'true';
const HOST = isDevelopment ? HOST_PRE : HOST_PRO;

export const TEXTS_PATH = `${HOST}/texts.json`;

export const PROJECTS_PATH = `${HOST}/projectsDB.json`;

export const SKILLS_PATH = `${HOST}/skills.json`;

export const FORMATION_PATH = `${HOST}/formation.json`;

export const EXPERIENCES_PATH = `${HOST}/experiences.json`;

export const LANGUAGES_PATH = `${HOST}/languages.json`;
