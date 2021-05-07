import { mount } from 'enzyme';
import 'jest-styled-components';
import Experiences from '.';
import { setupMockProvider } from '../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< Experiences >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <Experiences cuePointsActivated={new Set()} />
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
