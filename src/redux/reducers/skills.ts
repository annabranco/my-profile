import { LOAD_SKILLS_SUCCESS } from '../../constants';
import { IActionReducer, ISkillGroups } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

const sectionReducer: IActionReducer<ISkillGroups[]> = (
  state = INITIAL_STATE.skills,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SKILLS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default sectionReducer;
