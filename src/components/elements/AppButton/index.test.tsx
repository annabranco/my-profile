import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import AppButton from '.';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< AppButton >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <AppButton buttonStyle="" onClick={() => jest.fn()} text="Mock Button" />
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
