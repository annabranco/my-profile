import { LOAD_SKILLS_SUCCESS } from '../../constants';
import { ISkillGroups } from '../../types/interfaces';
import { INITIAL_STATE } from '../initialState';

interface Action {
  type: string;
  payload: ISkillGroups[];
}

export default (
  state: ISkillGroups[] = INITIAL_STATE.skills,
  action: Action
): ISkillGroups[] => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SKILLS_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
