import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Social from '.';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should have a valid link to my e-mail', () => {
  });

  xit('should have a valid link to my GitHub', () => {
  });

  xit('should have a valid link to my LinkedIn', () => {
  });

  xit('should have a valid link to my Twitter', () => {
  });

  xit('should have valid call and message  links to my Skype', () => {
  });
});
