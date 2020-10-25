import { dispatch } from '.';
import {
  LOAD_FORMATION,
  LOAD_FORMATION_SUCCESS,
  LOAD_FORMATION_FAIL
} from '../../constants';

export const loadFormationRequest = () => ({
  type: LOAD_FORMATION
});

export const loadFormationSuccess = formation => ({
  type: LOAD_FORMATION_SUCCESS,
  payload: [...formation]
});

export const loadFormationFail = error => ({
  type: LOAD_FORMATION_FAIL,
  payload: error
});

export const loadFormation = request => {
  dispatch(loadFormationRequest());
  request
    .then(
      ({ formation }) => formation && dispatch(loadFormationSuccess(formation))
    )
    .catch(error => dispatch(loadFormationFail(error)));
};

// // For one database reducer
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
