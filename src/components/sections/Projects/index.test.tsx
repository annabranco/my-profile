import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import Projects from '.';
import { setupMockProvider } from '../../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

// TODO [07-May -21]: Define real test suits (Anna Branco)

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
});
