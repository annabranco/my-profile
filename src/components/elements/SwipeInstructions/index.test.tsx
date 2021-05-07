import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import SwipeInstructions from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< SwipeInstructions >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <SwipeInstructions onCloseInstructions={() => jest.fn()} />
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
