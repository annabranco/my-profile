import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import SwipeInstructions from '.';
import { setupMockProvider } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should display a swipe image', () => {});

  xit('should display a button to advance sections', () => {});

  xit('should display arrows pointing to the advance button', () => {});

  xit('should trigger a close action when clicked anywhere', () => {});

  xit('should trigger a close action on swipe', () => {});
});
