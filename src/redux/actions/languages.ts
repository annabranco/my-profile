import {
  LOAD_LANGUAGES,
  LOAD_LANGUAGES_SUCCESS,
  LOAD_LANGUAGES_FAIL,
  CHANGE_LANGUAGE,
  GET_LANGUAGE_PREFERENCES,
  SET_LANGUAGE_PREFERENCES
} from '../../constants';

export const loadLanguagesRequest = () => ({
  type: LOAD_LANGUAGES
});

export const loadLanguagesSuccess = languages => ({
  type: LOAD_LANGUAGES_SUCCESS,
  payload: [...languages]
});

export const loadLanguagesFail = error => ({
  type: LOAD_LANGUAGES_FAIL,
  payload: error
});

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  payload: language
});

export const getLanguagerSettings = settings => ({
  type: GET_LANGUAGE_PREFERENCES,
  payload: settings
});

export const setLanguagerSettings = settings => ({
  type: SET_LANGUAGE_PREFERENCES,
  payload: settings
});

export const loadLanguages = request => dispatch => {
  dispatch(loadLanguagesRequest());
  request
    .then(({ languages }) => dispatch(loadLanguagesSuccess(languages)))
    .catch(error => dispatch(loadLanguagesFail(error)));
};
