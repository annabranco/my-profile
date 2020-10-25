import { dispatch } from '.';
import { getStore } from '..';
import {
  LOAD_TEXTS_DATABASE,
  LOAD_TEXTS_DATABASE_SUCCESS,
  LOAD_TEXTS_DATABASE_FAIL,
  UPDATE_TEXTS
} from '../../constants';

export const updateTexts = (
  language,
  textsDatabase = getStore().getState().textsDatabase
) => {
  return {
    type: UPDATE_TEXTS,
    payload: textsDatabase[language]
  };
};

export const loadTextsRequest = language => ({
  type: LOAD_TEXTS_DATABASE,
  payload: language
});

export const loadTextsSuccess = textsDatabase => {
  const { language } = getStore().getState();

  dispatch(updateTexts(language, textsDatabase));
  return {
    type: LOAD_TEXTS_DATABASE_SUCCESS,
    payload: { ...textsDatabase }
  };
};

export const loadTextsFail = error => ({
  type: LOAD_TEXTS_DATABASE_FAIL,
  payload: error
});

export const loadTexts = request => {
  dispatch(loadTextsRequest());
  request
    .then(texts => texts && dispatch(loadTextsSuccess(texts)))
    .catch(error => {
      console.error('Error loading texts.', error);
      dispatch(loadTextsFail(error));
    });
};

// For one database reducer
// export const loadLanguagesRequest = () => ({
//   type: LOAD_LANGUAGES,
//   payload: {
//     group: LANGUAGES
//   }
// });

// export const loadLanguagesSuccess = languages => ({
//   type: LOAD_LANGUAGES_SUCCESS,
//   payload: {
//     data: { ...languages },
//     group: LANGUAGES
//   }
// });

// export const loadLanguagesFail = error => ({
//   type: LOAD_LANGUAGES_FAIL,
//   payload: {
//     data: error,
//     group: LANGUAGES
//   }
// });
