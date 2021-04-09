import { LOAD_SKILLS_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.skills, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SKILLS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};