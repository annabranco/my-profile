import { IActionDispatchFunction } from '../../types/interfaces';
import { CHANGE_SECTION } from '../../constants';

export const changeSection: IActionDispatchFunction<string> = payload => ({
  type: CHANGE_SECTION,
  payload
});
