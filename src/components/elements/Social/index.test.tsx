import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Social from '.';

// TODO [07-May -21]: Define real test suits (Anna Branco)

const mockTexts = {
  aditional: '',
  advise: '',
  call: 'Call',
  chat: 'Chat',
  job: '',
  thankyou: ''
};

describe('< Social >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Social texts={mockTexts} />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
