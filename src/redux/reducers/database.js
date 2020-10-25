import {
  LOAD_FORMATION_SUCCESS,
  LOAD_EXPERIENCES_SUCCESS,
  EXPERIENCES,
  NO_GROUP,
  FORMATION,
  PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  TEXTS,
  LOAD_TEXTS_DATABASE_SUCCESS,
  SKILLS,
  LOAD_SKILLS_SUCCESS
} from '../../constants';

const ACTION_CASES = {
  [NO_GROUP]: NO_GROUP,
  [EXPERIENCES]: LOAD_EXPERIENCES_SUCCESS,
  [FORMATION]: LOAD_FORMATION_SUCCESS,
  [PROJECTS]: LOAD_PROJECTS_SUCCESS,
  [SKILLS]: LOAD_SKILLS_SUCCESS,
  [TEXTS]: LOAD_TEXTS_DATABASE_SUCCESS
};

// Basic version
export default (state = {}, action) => {
  const { type, payload: { group, data } = { group: NO_GROUP } } = action;

  switch (type) {
    case ACTION_CASES[group]:
      console.log('$$$ ACTION_CASES[group]', ACTION_CASES[group]);
      console.log('$$$ state', state);
      console.log('$$$ data', data);

      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
};

// CLASS version
export default class {
  constructor(state, action) {
      console.log('$$$ state', state);

    const { type, payload: { data, group } = { group: NO_GROUP } } = action;

    switch (type) {
      case ACTION_CASES[group]:
        return {
          ...state[group],
          ...data
        };
      default:
        return state;
    }
  }