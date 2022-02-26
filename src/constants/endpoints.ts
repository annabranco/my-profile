import { isDevelopment } from '../utils/environments';

const HOST_PRO =
  'https://raw.githubusercontent.com/annabranco/my-profile/master/src/db';
const HOST_PRE = 'http://localhost:3031';

const HOST = isDevelopment ? HOST_PRE : HOST_PRO;

export const EXPERIENCES_PATH = `${HOST}/experiences.json`;
export const FORMATION_PATH = `${HOST}/formation.json`;
export const LANGUAGES_PATH = `${HOST}/languages.json`;
export const PROJECTS_PATH = `${HOST}/projectsDB.json`;
export const SKILLS_PATH = `${HOST}/skills.json`;
export const TEXTS_PATH = `${HOST}/texts.json`;
