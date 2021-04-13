import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import ScrollArea from '.';
import { setupMockProvider } from '../../../../testing/mocks';
// import { getMockState } from '../../../../testing/mocks/mockState';

describe('< ScrollArea >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    // eslint-disable-next-line prefer-destructuring

    component = shallow(
      <MockProvider>
        <ScrollArea langModalVisible={false} />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(component).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
