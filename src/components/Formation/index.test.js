import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import '../../../testing/mocks/matchMedia';
import Formation from '.';
import { setupMockProvider, subSectionsStatus } from '../../../testing/mocks';

// import { getMockState } from '../../../testing/mocks/mockState';

describe('< Formation >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <Formation
          onClickClose={() => null}
          onClickOpen={() => null}
          status={subSectionsStatus}
        />
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
