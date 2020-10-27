import { LOAD_LANGUAGES_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.languages, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LANGUAGES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
