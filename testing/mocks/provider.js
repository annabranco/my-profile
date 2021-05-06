/* eslint-disable react/display-name, react/prop-types */

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import interceptorMiddleware from './middleware';
import getMockState from './state';

const getMockProvider = partialState => {
  const language = {
    language: (partialState && partialState.language) || 'en'
  };
  const mockStore = configureStore([interceptorMiddleware]);
  const store = mockStore({ ...getMockState(language), ...partialState });

  return {
    MockProvider: ({ children }) => (
      <Provider store={store}>{children}</Provider>
    ),
    store
  };
};

export default partialState => {
  const { MockProvider } = getMockProvider(partialState);
  return { MockProvider };
};
