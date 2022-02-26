import {
  IActionDispatchFunction,
  IActionDispatchFunctionWithRequest,
  IActionRequestFunction,
  ILanguage
} from '../../types/interfaces';
import {
  LOAD_LANGUAGES,
  LOAD_LANGUAGES_SUCCESS,
  LOAD_LANGUAGES_FAIL,
  CHANGE_LANGUAGE
} from '../../constants';

export const loadLanguagesRequest: IActionRequestFunction = () => ({
  type: LOAD_LANGUAGES
});

export const loadLanguagesSuccess: IActionDispatchFunction<
  ILanguage[]
> = languages => ({
  type: LOAD_LANGUAGES_SUCCESS,
  payload: [...languages]
});

export const loadLanguagesFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_LANGUAGES_FAIL,
  payload: error
});

export const changeLanguage: IActionDispatchFunction<string> = language => ({
  type: CHANGE_LANGUAGE,
  payload: language
});

export const loadLanguages: IActionDispatchFunctionWithRequest<
  ILanguage[]
> = request => dispatch => {
  dispatch(loadLanguagesRequest());
  request
    .then(languages => dispatch(loadLanguagesSuccess(languages)))
    .catch(error => dispatch(loadLanguagesFail(error)));
};
