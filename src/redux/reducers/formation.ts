import { LOAD_FORMATION_SUCCESS } from '../../constants';
import { IActionReducer, IFormation } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const formationReducer: IActionReducer<IFormation[]> = (
  state = INITIAL_STATE.formation,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FORMATION_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default formationReducer;
