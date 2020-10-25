import { getStore } from '..';

const store = getStore();

// Dispatch being fired inside other Redux actions
export const dispatch = action => {
  const { type, payload } = action;
  store.dispatch({
    type,
    payload
  });
};
