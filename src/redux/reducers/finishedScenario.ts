import { FINISH_SCENARIO } from '../../constants';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: boolean;
}

export default (
  state: boolean = INITIAL_STATE.finishedScenario,
  action: Action
): boolean => {
  const { type, payload } = action;

  switch (type) {
    case FINISH_SCENARIO:
      return payload;
    default:
      return state;
  }
};
