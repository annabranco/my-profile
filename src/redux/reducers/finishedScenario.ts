import { FINISH_SCENARIO } from '../../constants';
import { IActionReducer } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const finishedReducer: IActionReducer<boolean> = (
  state = INITIAL_STATE.finishedScenario,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case FINISH_SCENARIO:
      return payload;
    default:
      return state;
  }
};

export default finishedReducer;
