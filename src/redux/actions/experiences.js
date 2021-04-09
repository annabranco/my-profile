import {
  LOAD_EXPERIENCES,
  LOAD_EXPERIENCES_SUCCESS,
  LOAD_EXPERIENCES_FAIL
} from '../../constants';

export const loadExperiencesRequest = () => {
  return {
    type: LOAD_EXPERIENCES
  };
};

export const loadExperiencesSuccess = experiences => ({
  type: LOAD_EXPERIENCES_SUCCESS,
  payload: [...experiences]
});

export const loadExperiencesFail = error => ({
  type: LOAD_EXPERIENCES_FAIL,
  payload: error
});

export const loadExperiences = request => dispatch => {
  dispatch(loadExperiencesRequest());
  request
    .then(
      ({ experiences }) =>
        experiences && dispatch(loadExperiencesSuccess(experiences))
    )
    .catch(error => dispatch(loadExperiencesFail(error)));
};
