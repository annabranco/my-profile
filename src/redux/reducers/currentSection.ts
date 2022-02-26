import { INITIAL_STATE } from '../initialState';
import { IActionReducer, IPageSection } from '../../types/interfaces';
import { CHANGE_SECTION } from '../../constants';

const sectionReducer: IActionReducer<IPageSection> = (
  state = INITIAL_STATE.currentSection as IPageSection,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SECTION:
      return payload;
    default:
      return state;
  }
};

export default sectionReducer;
