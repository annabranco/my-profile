import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import ProjectDetails from '.';
import { getMockState, setupMockProvider } from '../../../../../testing/mocks';

// TODO [07-May -21]: Define real test suites (Anna Branco)

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
});
