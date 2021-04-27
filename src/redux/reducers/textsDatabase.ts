import { LOAD_TEXTS_DATABASE_SUCCESS } from '../../constants';
import { ITextsData } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: ITextsData;
}

export default (
  state: ITextsData | Record<string, never> = INITIAL_STATE.textsDatabase,
  action: Action
): ITextsData | Record<string, never> => {
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
