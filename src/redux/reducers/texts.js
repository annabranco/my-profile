// import useDatabaseReducer from './database';

// export default (state, action) => {
//   console.log('$$$ REDUCER state', state);
//   return useDatabaseReducer(state, action);
// };

import { UPDATE_TEXTS } from '../../constants';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE.texts, action) => {
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

// // For one database reducer
// const { type, payload: { data } = { group: NO_GROUP } } = action;
