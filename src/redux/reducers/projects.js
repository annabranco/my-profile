import { LOAD_PROJECTS_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.projects, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROJECTS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
