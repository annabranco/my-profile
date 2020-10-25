import { dispatch } from '.';
import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_FAIL
} from '../../constants';

export const loadSkillsRequest = () => ({
  type: LOAD_SKILLS
});

export const loadSkillsSuccess = skills => ({
  type: LOAD_SKILLS_SUCCESS,
  payload: [...skills]
});

export const loadSkillsFail = error => ({
  type: LOAD_SKILLS_FAIL,
  payload: error
});

export const loadSkills = request => {
  dispatch(loadSkillsRequest());
  request
    .then(
      ({ skillGroups }) =>
        skillGroups && dispatch(loadSkillsSuccess(skillGroups))
    )
    .catch(error => dispatch(loadSkillsFail(error)));
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
