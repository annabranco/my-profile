import { INITIAL_STATE } from '../initialState';
import { CHANGE_SECTION } from '../../constants';

interface Action {
  type: string;
  payload: string;
}

export default (
  state: string = INITIAL_STATE.currentSection,
  action: Action
): string => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SECTION:
      return payload;
    default:
      return state;
  }
};
