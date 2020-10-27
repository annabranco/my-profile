import { LOAD_FORMATION_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.formation, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FORMATION_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
