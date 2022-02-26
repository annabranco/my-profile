import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IAppState } from '../types/interfaces/index';
import { isDevelopment } from '../utils/environments';
import { INITIAL_STATE } from './initialState';
import updateTexts from './middleware/updateTexts';
import rootReducer from './reducers';

const productionFeatures = {
  pause: false,
  lock: false,
  skip: false,
  reorder: false
};

const devToolsEnhancer = composeWithDevTools({
  features: isDevelopment ? productionFeatures : {}
});

let store: Store;

export const getStore = (): Store<IAppState> => {
  if (!store) {
    store = createStore(
      rootReducer,
      INITIAL_STATE, // [1]
      compose(applyMiddleware(thunk, updateTexts), devToolsEnhancer())
    );
  }

  // eslint-disable-next-line no-underscore-dangle
  if (window._debug) {
    store.subscribe(() => console.debug('STATE UPDATED', store.getState())); // eslint-disable-line no-console
  }
  return store;
};
