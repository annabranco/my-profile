import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_FAIL
} from '../../constants';

export const loadSkillsRequest = () => ({
  type: LOAD_SKILLS
});

export const loadSkillsSuccess = skills => ({
  type: LOAD_SKILLS_SUCCESS,
  payload: [...skills]
});

export const loadSkillsFail = error => ({
  type: LOAD_SKILLS_FAIL,
  payload: error
});

export const loadSkills = request => dispatch => {
  dispatch(loadSkillsRequest());
  request
    .then(
      ({ skillGroups }) =>
        skillGroups && dispatch(loadSkillsSuccess(skillGroups))
    )
    .catch(error => dispatch(loadSkillsFail(error)));
};
