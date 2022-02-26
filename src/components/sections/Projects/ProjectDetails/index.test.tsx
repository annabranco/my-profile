import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import ProjectDetails from '.';
import { getMockState, setupMockProvider } from '../../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< ProjectDetails >', () => {
  const mockProject = getMockState({
    language: 'en'
  }).projects[0];
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <ProjectDetails actualPage={1} project={mockProject} />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should render info about the project received by props, displaying  the name, thumbnail and link', () => {});

  xit('should render the project description on desktops', () => {});

  xit('should display an animation when displaying each pair of projects', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
