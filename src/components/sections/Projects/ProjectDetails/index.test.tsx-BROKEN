import { mount } from 'enzyme';
import 'jest-styled-components';
import ProjectDetails from '.';
import { getMockState, setupMockProvider } from '../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< ProjectDetails >', () => {
  const mockProject = getMockState({
    language: 'en'
  }).projects[0];
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <ProjectDetails displayThumbnails={false} project={mockProject} />
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
