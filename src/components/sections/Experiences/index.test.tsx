import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Experiences from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< Experiences >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <Experiences cuePointsActivated={new Set()} />
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
