import { CHANGE_LANGUAGE } from '../../constants';
import { IActionReducer, ILanguageCode } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const languageReducer: IActionReducer<ILanguageCode> = (
  state = INITIAL_STATE.language,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return payload;
    default:
      return state;
  }
};

export default languageReducer;
