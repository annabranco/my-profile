import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Barquinho } from '../../../images';
import { errorTextsPropType } from '../../../types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
    texts: errorTextsPropType.isRequired
  };

  static defaultProps = {
    children: undefined
  };

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Something unexpected had happened', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { texts } = this.props;
      return (
        <div className="section__infoPage fullScreen">
          <img
            className="infoPage__boat"
            src={Barquinho}
            alt="Navigating beautifully"
          />
          <h2 className="error-boundary__title">{texts.title}</h2>
          <div className="error-boundary__notify--wrapper">
            <p className="error-boundary__sorry-msg">{texts.errorLine1}</p>
            <p className="error-boundary__sorry-msg">{texts.errorLine2}</p>
            <a
              className="infoPage__social--link with-top-margin"
              href="https://github.com/annabranco/my-profile/issues/new"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <p className="error-boundary__notify-button">{texts.notifyMe}</p>
              <i className="fab fa-github-alt error-boundary__notify-button--text" />
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
