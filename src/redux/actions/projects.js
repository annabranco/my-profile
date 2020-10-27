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

export const loadProjects = request => dispatch => {
  dispatch(loadProjectsRequest());
  request
    .then(({ projects }) => projects && dispatch(loadProjectsSuccess(projects)))
    .catch(error => dispatch(loadProjectsFail(error)));
};
