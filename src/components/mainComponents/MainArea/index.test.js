import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import MainArea from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// import { getMockState } from '../../../testing/mocks/mockState';

describe('< MainArea >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = shallow(
      <MockProvider>
        <MainArea langModalVisible={false} />
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
