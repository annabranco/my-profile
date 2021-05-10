import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import SkillLevel from '.';
import { setupMockProvider } from '../../../../../testing/mocks';

// TODO [07-May -21]: Define real test suites (Anna Branco)

describe('< SkillLevel >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <SkillLevel level={3} skill="mockSkill" />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should render a wrapper with stars corresponding to the level received by props', () => {});

  xit('should make the stars visible only on hover', () => {});
});
