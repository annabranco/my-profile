import { LOAD_EXPERIENCES_SUCCESS } from '../../constants';
import { IExperiencesType } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: IExperiencesType[];
}

export default (
  state: IExperiencesType[] = INITIAL_STATE.experiences,
  action: Action
): IExperiencesType[] => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_EXPERIENCES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
