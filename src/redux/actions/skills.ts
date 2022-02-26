import {
  IActionDispatchFunction,
  IActionDispatchFunctionWithRequest,
  IActionRequestFunction,
  ISkillGroups
} from '../../types/interfaces';
import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_FAIL
} from '../../constants';

export const loadSkillsRequest: IActionRequestFunction = () => ({
  type: LOAD_SKILLS
});

export const loadSkillsSuccess: IActionDispatchFunction<
  ISkillGroups[]
> = skills => ({
  type: LOAD_SKILLS_SUCCESS,
  payload: [...skills]
});

export const loadSkillsFail: IActionDispatchFunction<Error> = error => ({
  type: LOAD_SKILLS_FAIL,
  payload: error
});

export const loadSkills: IActionDispatchFunctionWithRequest<
  ISkillGroups[]
> = request => dispatch => {
  dispatch(loadSkillsRequest());
  request
    .then(skills => skills && dispatch(loadSkillsSuccess(skills)))
    .catch(error => dispatch(loadSkillsFail(error)));
};
