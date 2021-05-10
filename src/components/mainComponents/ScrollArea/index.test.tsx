import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import ScrollArea from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< ScrollArea >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <ScrollArea
          isSeabedElementOpened={false}
          langModalVisible={false}
          openSeabedElement={() => jest.fn()}
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

  xit('should display navigation instructions when mounting on devices', () => {
  });

  xit('should change the active section when scrolling', () => {
  });

  xit('should display the corresponding component when its section is active on desktops', () => {
  });

  xit('should display the corresponding component when its section is active on devices', () => {
  });

  xit('should display a button that advances to the next section on devices', () => {
  });

  xit('should advance to the next section when swiped right on devices', () => {
  });

  xit('should back to the previous section when swiped left on devices', () => {
  });
});
