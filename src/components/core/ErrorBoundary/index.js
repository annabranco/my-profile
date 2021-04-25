import React, { Component } from 'react';
import { connect } from 'react-redux';
import { node } from 'prop-types';
import ErrorComponent from './ErrorComponent';
import { errorTextsPropType } from '../../../types/propTypes';

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

export const getUser = state => state.user;

const mapStateToProps = state => ({
  texts: state.texts.error
});

export default connect(mapStateToProps)(ErrorBoundary);
