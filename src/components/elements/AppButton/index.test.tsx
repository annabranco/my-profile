import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import AppButton from '.';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('executes onClick prop event correctly', () => {
  });
});
