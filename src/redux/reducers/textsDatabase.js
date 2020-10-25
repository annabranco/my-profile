// import useDatabaseReducer from './database';

// export default (state, action) => {
//   console.log('$$$ REDUCER state', state);
//   return useDatabaseReducer(state, action);
// };

import { LOAD_TEXTS_DATABASE_SUCCESS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.textsDatabase, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TEXTS_DATABASE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

// // For one database reducer
// const { type, payload: { data } = { group: NO_GROUP } } = action;
