import {
  ComponentClass,
  HTMLAttributes,
  mount,
  ReactWrapper,
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import ErrorComponent from './ErrorComponent';
import appInfo from '../../../../package.json';
import { NotifyButton } from './styles';

const MOCK_ERROR = 'MOCK_ERROR';
const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

interface TextElement extends ComponentClass<HTMLAttributes> {
  target: string;
}

describe('< ErrorComponent >', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    jest.useFakeTimers();
    wrapper = mount(<ErrorComponent error={MOCK_ERROR} />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a sorry title', () => {
    const titleElement = wrapper.find('ErrorTitle');
    expect(titleElement.exists()).toBe(true);
    expect((titleElement.type() as TextElement).target).toBe('h2');
    expect(titleElement.text()).toBe(DEFAULT_ERROR_TEXTS.title);
  });

  it('should display a sorry message', () => {
    const sorryMessages = wrapper.find('SorryText');
    expect(sorryMessages).toHaveLength(2);
    expect(sorryMessages.first().text()).toBe(DEFAULT_ERROR_TEXTS.errorLine1);
    expect(sorryMessages.at(1).text()).toBe(DEFAULT_ERROR_TEXTS.errorLine2);
  });

  it('should have a container displaying the error message', () => {
    const errorWrapper = wrapper.find('ErrorDetailsArea');
    expect(errorWrapper).toBeDefined();
    expect(errorWrapper.find('DetailsText').children().text()).toBe(MOCK_ERROR);
  });

  it('should have a notify button leading to Github issues page', () => {
    const REPORT_ISSUE_PAGE = `${appInfo.bugs.url}/new`;

    const notifyButton = wrapper.find('NotifyButton');
    expect(notifyButton).toBeDefined();
    expect(notifyButton.find('NotifyButtonText').first().text()).toBe(
      DEFAULT_ERROR_TEXTS.notifyMe
    );
    expect((notifyButton.type() as TextElement).target).toBe('a');
    expect(notifyButton.props().href).toBe(REPORT_ISSUE_PAGE);
  });
});
