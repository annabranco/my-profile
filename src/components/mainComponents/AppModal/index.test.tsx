import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import AppModal from '.';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should render an overlay on the top of the screen', () => {
  });

  xit('should correctly render any children received by props', () => {
  });

  xit('should trigger a close action when clicked anywhere', () => {
  });
});
