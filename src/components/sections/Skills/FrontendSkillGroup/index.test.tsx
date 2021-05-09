import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import FrontendSkillGroup from '.';
import { getMockState, setupMockProvider } from '../../../../../testing/mocks';

// TODO [07-May -21]: Define real test suites (Anna Branco)

describe('< FrontendSkillGroup >', () => {
  const mockSkillObject = getMockState({
    language: 'en'
  }).skills[0];
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <FrontendSkillGroup details={mockSkillObject} visible />
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
