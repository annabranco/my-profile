import {
  IActionDispatchFunction,
  IActionDispatchFunctionWithRequest,
  IActionRequestFunction,
  IProjects
} from '../../types/interfaces';
import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAIL
} from '../../constants';

export const loadProjectsRequest: IActionRequestFunction = () => ({
  type: LOAD_PROJECTS
});

export const loadProjectsSuccess: IActionDispatchFunction<
  IProjects[]
> = projects => ({
  type: LOAD_PROJECTS_SUCCESS,
  payload: [...projects]
});

export const loadProjectsFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_PROJECTS_FAIL,
  payload: error
});

export const loadProjects: IActionDispatchFunctionWithRequest<
  IProjects[]
> = request => dispatch => {
  dispatch(loadProjectsRequest());
  request
    .then(projects => projects && dispatch(loadProjectsSuccess(projects)))
    .catch(error => dispatch(loadProjectsFail(error)));
};
