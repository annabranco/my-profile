import { LOAD_LANGUAGES_SUCCESS } from '../../constants';
import { IActionReducer, ILanguage } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const languagesReducer: IActionReducer<ILanguage[]> = (
  state = INITIAL_STATE.languages,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LANGUAGES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default languagesReducer;
