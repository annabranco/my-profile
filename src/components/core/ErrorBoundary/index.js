import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: undefined
  };

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
