import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Skills from '.';
import { setupMockProvider } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< Skills >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <Skills cuePointsActivated={new Set()} />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should pass information about Frontend skills on a specific component', () => {});

  xit('should render skills received from server separated by groups', () => {});

  xit('should render on each skill a SkillLevel subcomponent passing a skill level as props', () => {});

  xit('should display animation when cuepoints are activated', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
