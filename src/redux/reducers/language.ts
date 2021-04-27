import { CHANGE_LANGUAGE } from '../../constants';
import { LanguageCode } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: LanguageCode;
}

export default (
  state: LanguageCode = INITIAL_STATE.language,
  action: Action
): LanguageCode => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LANGUAGE:
      return payload;
    default:
      return state;
  }
};
