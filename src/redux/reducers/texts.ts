import { UPDATE_TEXTS } from '../../constants';
import { IActionReducer, ITexts } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const textsReducer: IActionReducer<ITexts | Record<string, never>> = (
  state = INITIAL_STATE.texts,
  action
) => {
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

export default textsReducer;
