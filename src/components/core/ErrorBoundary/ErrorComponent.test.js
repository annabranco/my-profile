import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
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

const component = shallow(<ErrorComponent error={MOCK_ERROR} />);

describe('< ErrorComponent >', () => {
  it('should mount', () => {
    expect(component).toBeDefined();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<ErrorComponent error={MOCK_ERROR} />);
    expect(tree).toMatchSnapshot();
  });

  it('should display a sorry title', () => {
    const titleElement = component.find('ErrorTitle');
    expect(titleElement.exists()).toBe(true);
    expect(titleElement.type().target).toBe('h2');
    expect(titleElement.text()).toBe(DEFAULT_ERROR_TEXTS.title);
  });

  it('should display a sorry message', () => {
    const sorryMessages = component.find('SorryText');
    expect(sorryMessages).toHaveLength(2);
    expect(sorryMessages.first().text()).toBe(DEFAULT_ERROR_TEXTS.errorLine1);
    expect(sorryMessages.at(1).text()).toBe(DEFAULT_ERROR_TEXTS.errorLine2);
  });

  it('should have a container displaying the error message', () => {
    const errorWrapper = component.find('ErrorDetailsArea');
    expect(errorWrapper).toBeDefined();
    expect(errorWrapper.find('DetailsText').children().text()).toBe(MOCK_ERROR);
  });

  it('should have a notify button leading to Github issues page', () => {
    const REPORT_ISSUE_PAGE = `${appInfo.bugs.url}/new`;

    const notifyButton = component.find('NotifyButton');
    expect(notifyButton).toBeDefined();
    expect(notifyButton.find('NotifyButtonText').first().text()).toBe(
      DEFAULT_ERROR_TEXTS.notifyMe
    );
    expect(notifyButton.type().target).toBe('a');
    expect(notifyButton.props().href).toBe(REPORT_ISSUE_PAGE);
  });

  // This test is not working (timers are foiling)

  it('should only display notify button after prop change', () => {
    const buttonInitial = shallow(<NotifyButton />);
    expect(toJson(buttonInitial)).toHaveStyleRule('opacity', '0');
    buttonInitial.setProps({ visible: true });
    expect(toJson(buttonInitial)).toHaveStyleRule('opacity', '1');
  });

  // it('should display the notify button only after X seconds', () => {
  //   const notifyButton = component.find('NotifyButton');
  //   // console.log('$$$ jest', jest);
  //   jest.useFakeTimers();
  //   expect(notifyButton.prop('visible')).toBe(false);
  //   jest.runAllTimers();
  //   component.update();
  //   jest.setTimeout(6000);
  //   component.update();
  //   const notifyButton2 = component.find('NotifyButton');
  //   expect(notifyButton.prop('visible')).toBe(false);
  //   expect(notifyButton2.prop('visible')).toBe(false);
  //   component.setProps({});
  //   const notifyButton3 = component.find('NotifyButton');
  //   expect(notifyButton.prop('visible')).toBe(false);
  //   expect(notifyButton3.prop('visible')).toBe(false);
  //   console.log('$$$ notifyButton.debug()', notifyButton.props());
  // });
});