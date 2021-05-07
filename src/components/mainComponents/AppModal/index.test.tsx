import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import AppModal from '.';

// TODO [07-May -21]: Define real test suits (Anna Branco)

const MockChild = () => <p>Mock child</p>;

describe('< AppModal >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <AppModal closeAction={() => jest.fn()}>
        <MockChild />
      </AppModal>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
