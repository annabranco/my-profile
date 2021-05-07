import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import SeaBed from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< SeaBed >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <SeaBed
          cuePointsActivated={new Set()}
          openSeabedElement={() => jest.fn()}
          resetScrollPosition={() => jest.fn()}
        />
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
