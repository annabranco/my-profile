import { dispatch } from '.';
import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAIL
} from '../../constants';

export const loadProjectsRequest = () => ({
  type: LOAD_PROJECTS
});

export const loadProjectsSuccess = projects => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload: [...projects]
});

export const loadProjectsFail = error => ({
  type: LOAD_PROJECTS_FAIL,
  payload: error
});

export const loadProjects = request => {
  dispatch(loadProjectsRequest());
  request
    .then(({ projects }) => projects && dispatch(loadProjectsSuccess(projects)))
    .catch(error => dispatch(loadProjectsFail(error)));
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
