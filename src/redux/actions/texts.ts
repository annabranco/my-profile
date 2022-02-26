import { Dispatch } from 'redux';
import {
  IActionDispatchFunction,
  IActionRequestFunction,
  ITextsData
} from '../../types/interfaces';
import {
  LOAD_TEXTS_DATABASE,
  LOAD_TEXTS_DATABASE_SUCCESS,
  LOAD_TEXTS_DATABASE_FAIL
} from '../../constants';

export const loadTextsRequest: IActionRequestFunction = () => ({
  type: LOAD_TEXTS_DATABASE
});

export const loadTextsSuccess: IActionDispatchFunction<ITextsData> = textsDatabase => ({
  type: LOAD_TEXTS_DATABASE_SUCCESS,
  payload: { ...textsDatabase }
});

export const loadTextsFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_TEXTS_DATABASE_FAIL,
  payload: error
});

export const loadTexts = (request: Promise<ITextsData>) => (
  dispatch: Dispatch
): void => {
  dispatch(loadTextsRequest());
  request
    .then(
      textsDatabase =>
        textsDatabase && dispatch(loadTextsSuccess(textsDatabase))
    )
    .catch(error => {
      console.error('Error loading texts.', error);
      dispatch(loadTextsFail(error));
    });
};
