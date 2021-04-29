import { LOAD_TEXTS_DATABASE_SUCCESS } from '../../constants';
import { IActionReducer, ITextsData } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const sectionReducer: IActionReducer<ITextsData | Record<string, never>> = (
  state = INITIAL_STATE.textsDatabase,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TEXTS_DATABASE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default sectionReducer;
