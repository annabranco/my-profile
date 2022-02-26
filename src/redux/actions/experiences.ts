import {
  IActionDispatchFunction,
  IActionDispatchFunctionWithRequest,
  IActionRequestFunction,
  IExperiencesType
} from '../../types/interfaces';
import {
  LOAD_EXPERIENCES,
  LOAD_EXPERIENCES_SUCCESS,
  LOAD_EXPERIENCES_FAIL
} from '../../constants';

export const loadExperiencesRequest: IActionRequestFunction = () => {
  return {
    type: LOAD_EXPERIENCES
  };
};

export const loadExperiencesSuccess: IActionDispatchFunction<
  IExperiencesType[]
> = experiences => ({
  type: LOAD_EXPERIENCES_SUCCESS,
  payload: [...experiences]
});

export const loadExperiencesFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_EXPERIENCES_FAIL,
  payload: error
});

export const loadExperiences: IActionDispatchFunctionWithRequest<
  IExperiencesType[]
> = request => dispatch => {
  dispatch(loadExperiencesRequest());
  request
    .then(
      experiences =>
        experiences && dispatch(loadExperiencesSuccess(experiences))
    )
    .catch(error => dispatch(loadExperiencesFail(error)));
};
