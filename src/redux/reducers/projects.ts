import { LOAD_PROJECTS_SUCCESS } from '../../constants';
import { IProjects } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: IProjects[];
}

export default (
  state: IProjects[] = INITIAL_STATE.projects,
  action: Action
): IProjects[] => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROJECTS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
