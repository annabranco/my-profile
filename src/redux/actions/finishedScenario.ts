import { IActionDispatchFunction } from '../../types/interfaces';
import { FINISH_SCENARIO } from '../../constants';

export const triggerFinishScenario: IActionDispatchFunction<boolean> = payload => ({
  type: FINISH_SCENARIO,
  payload
});
