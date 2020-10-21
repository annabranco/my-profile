import React, { Component } from 'react';
import { node } from 'prop-types';
import { errorTextsPropType } from '../../../types';
import ErrorComponent from './ErrorComponent';

class ErrorBoundary extends Component {
  static propTypes = {
    children: node,
    texts: errorTextsPropType.isRequired
  };

  static defaultProps = {
    children: null
  };

  state = {
    error: false
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Something unexpected had happened', error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { texts } = this.props;

    if (error) {
      return <ErrorComponent error={error.message} texts={texts} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
