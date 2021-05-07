import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import FishesElement from '.';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< FishesElement >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<FishesElement />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
