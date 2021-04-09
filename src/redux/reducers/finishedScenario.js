import { FINISH_SCENARIO } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.finishedScenario, action) => {
  const { type, payload } = action;

  switch (type) {
    case FINISH_SCENARIO:
      return payload;
    default:
      return state;
  }
};
