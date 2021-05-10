import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import MainArea from '.';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< MainArea >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <MainArea
        isSeabedElementOpened={false}
        langModalVisible={false}
        openSeabedElement={() => jest.fn()}
      />
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should correctly pass received props to a Scroll Area component', () => {
  });
});
