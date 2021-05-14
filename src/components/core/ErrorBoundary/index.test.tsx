import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import ErrorBoundary from '.';
import { setupMockProvider } from '../../../tests/mocks';

const MockChild = () => <p>Mock Child</p>;

describe('< ErrorBoundary >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <ErrorBoundary>
          <MockChild />
        </ErrorBoundary>
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should pass caught error to an Error Component', () => {});
});
