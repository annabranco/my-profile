import { LOAD_PROJECTS_SUCCESS } from '../../constants';
import { IActionReducer, IProjects } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const projectsReducer: IActionReducer<IProjects[]> = (
  state = INITIAL_STATE.projects,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROJECTS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default projectsReducer;
