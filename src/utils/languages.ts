import { APP_LANGUAGES } from '../constants';
import { ILanguageCode } from '../types/interfaces';

export const getLanguageCodeByName = (name: string): string => {
  const index = Object.values(APP_LANGUAGES).findIndex(
    language => language === name
  );
  return Object.keys(APP_LANGUAGES)[index];
};

export const getLanguageNameByCode = (code: ILanguageCode): string =>
  APP_LANGUAGES[code];
