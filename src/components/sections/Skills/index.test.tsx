import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Skills from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suites (Anna Branco)

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
});
