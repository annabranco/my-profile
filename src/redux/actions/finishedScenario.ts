import { FINISH_SCENARIO } from '../../constants';

export const triggerFinishScenario = payload => ({
  type: FINISH_SCENARIO,
  payload
});
