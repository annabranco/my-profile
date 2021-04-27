import { UPDATE_TEXTS } from '../../constants';
import { ITexts } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: ITexts;
}

export default (
  state: ITexts | Record<string, never> = INITIAL_STATE.texts,
  action: Action
): ITexts | Record<string, never> => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TEXTS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
