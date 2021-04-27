import { LOAD_LANGUAGES_SUCCESS } from '../../constants';
import { ILanguage } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: ILanguage[];
}

export default (
  state: ILanguage[] = INITIAL_STATE.languages,
  action: Action
): ILanguage[] => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LANGUAGES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
