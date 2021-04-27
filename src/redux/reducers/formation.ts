import { LOAD_FORMATION_SUCCESS } from '../../constants';
import { IFormation } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: IFormation[];
}

export default (
  state: IFormation[] = INITIAL_STATE.formation,
  action: Action
): IFormation[] => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FORMATION_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
