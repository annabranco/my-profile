import { CHANGE_LANGUAGE } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.language, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return payload;
    default:
      return state;
  }
};
