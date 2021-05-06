import { mount } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import Projects from '.';
import { setupMockProvider } from '../../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< Projects >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <Projects adjustScrollAfterThumbnails={() => null} />
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
