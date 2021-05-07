import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import ScrollSection from '.';
import { setupMockProvider } from '../../../../../testing/mocks';

const MockChildren = () => <p>Mock Text</p>;

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< ScrollSection >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;

    wrapper = shallow(
      <MockProvider>
        <ScrollSection title="Mock Section">
          <MockChildren />
        </ScrollSection>
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
