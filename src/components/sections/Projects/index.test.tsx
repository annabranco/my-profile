import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../tests/mocks/matchMedia';
import Projects from '.';
import { setupMockProvider } from '../../../tests/mocks';
// import { getMockState } from '../../../tests/mocks/mockState';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< Projects >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <Projects cuePointsActivated={new Set()} />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should render a ProjectsList component', () => {});

  xit('should correctly send updated information to ProjectsList component', () => {});
});
