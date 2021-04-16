import { INITIAL_STATE } from '../initialState';
import { CHANGE_SECTION } from '../../constants';

export default (state = INITIAL_STATE.currentSection, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SECTION:
      return payload;
    default:
      return state;
  }
};
