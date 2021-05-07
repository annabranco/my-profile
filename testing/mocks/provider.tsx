/* eslint-disable react/display-name */

import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { ILanguageCode } from '../../src/types/interfaces';
import interceptorMiddleware from './middleware';
import getMockState from './state';

interface ChildrenProps {
  children: ReactElement;
}

interface MockProviderProps {
  MockProvider: ({ children }: ChildrenProps) => ReactElement;
  // store: MockStoreEnhanced<IAppState>;
}

interface PartialStateProps {
  language: ILanguageCode;
}

const getMockProvider = (
  partialState: PartialStateProps
): MockProviderProps => {
  const language = {
    language: (partialState && partialState.language) || 'en'
  };
  const mockStore = configureStore([interceptorMiddleware]);
  const store: MockStoreEnhanced<unknown> = mockStore({
    ...getMockState(language),
    ...partialState
  });

  return {
    MockProvider: ({ children }: ChildrenProps) => (
      <Provider store={store}>{children}</Provider>
    )
    // store
  };
};

export default (partialState: PartialStateProps): MockProviderProps => {
  const { MockProvider } = getMockProvider(partialState);
  return { MockProvider };
};
