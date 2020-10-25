import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isDevelopment } from '../utils/environments';
import { INITIAL_STATE } from './initialState';
import rootReducer from './reducers';

const productionFeatures = {
  pause: false,
  lock: false,
  skip: false,
  reorder: false
};

const composeEnhancers = composeWithDevTools({
  features: !isDevelopment && productionFeatures
});

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(rootReducer, INITIAL_STATE, composeEnhancers());
  }
  // eslint-disable-next-line no-underscore-dangle
  if (window._debug) {
    store.subscribe(() => console.log('$$$ STATE UPDATED', store.getState()));
  }
  return store;
};
