import { dispatch } from '.';
import {
  LOAD_EXPERIENCES,
  LOAD_EXPERIENCES_SUCCESS,
  LOAD_EXPERIENCES_FAIL
} from '../../constants';

export const loadExperiencesRequest = () => ({
  type: LOAD_EXPERIENCES
});

export const loadExperiencesSuccess = experiences => ({
  type: LOAD_EXPERIENCES_SUCCESS,
  payload: [...experiences]
});

export const loadExperiencesFail = error => ({
  type: LOAD_EXPERIENCES_FAIL,
  payload: error
});

export const loadExperiences = request => {
  dispatch(loadExperiencesRequest());
  request
    .then(
      ({ experiences }) =>
        experiences && dispatch(loadExperiencesSuccess(experiences))
    )
    .catch(error => dispatch(loadExperiencesFail(error)));
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
