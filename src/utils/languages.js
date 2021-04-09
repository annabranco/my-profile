import { APP_LANGUAGES } from '../constants';

export const getLanguageCodeByName = name => {
  const index = Object.values(APP_LANGUAGES).findIndex(
    language => language === name
  );
  return Object.keys(APP_LANGUAGES)[index];
};

export const getLanguageNameByCode = code => APP_LANGUAGES[code];
