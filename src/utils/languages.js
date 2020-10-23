import { LANGUAGES } from '../constants';

export const getLanguageCodeByName = name => {
  const index = Object.values(LANGUAGES).findIndex(
    language => language === name
  );
  return Object.keys(LANGUAGES)[index];
};

export const getLanguageNameByCode = code => LANGUAGES[code];
