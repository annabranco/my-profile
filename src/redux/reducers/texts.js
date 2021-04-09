import { UPDATE_TEXTS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.texts, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TEXTS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
