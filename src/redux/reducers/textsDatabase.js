import { LOAD_TEXTS_DATABASE_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.textsDatabase, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TEXTS_DATABASE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
