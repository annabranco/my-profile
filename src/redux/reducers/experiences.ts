import { LOAD_EXPERIENCES_SUCCESS } from '../../constants';
import { IActionReducer, IExperiencesType } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const experiencesReducer: IActionReducer<IExperiencesType[]> = (
  state = INITIAL_STATE.experiences,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_EXPERIENCES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default experiencesReducer;
