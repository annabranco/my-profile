import {
  LOAD_TEXTS_DATABASE,
  LOAD_TEXTS_DATABASE_SUCCESS,
  LOAD_TEXTS_DATABASE_FAIL
} from '../../constants';

export const loadTextsRequest = language => ({
  type: LOAD_TEXTS_DATABASE,
  payload: language
});

export const loadTextsSuccess = textsDatabase => ({
  type: LOAD_TEXTS_DATABASE_SUCCESS,
  payload: { ...textsDatabase }
});

export const loadTextsFail = error => ({
  type: LOAD_TEXTS_DATABASE_FAIL,
  payload: error
});

export const loadTexts = request => dispatch => {
  dispatch(loadTextsRequest());
  request
    .then(texts => texts && dispatch(loadTextsSuccess(texts)))
    .catch(error => {
      console.error('Error loading texts.', error);
      dispatch(loadTextsFail(error));
    });
};
