import React, { Component, ErrorInfo, ReactNode } from 'react';
import { connect } from 'react-redux';
import { node } from 'prop-types';
import ErrorComponent from './ErrorComponent';
import { errorTextsPropType } from '../../../types/propTypes';
import { AppState, ErrorTextType } from '../../../types/interfaces';

interface ErrorTexts {
  texts: ErrorTextType;
}

interface Props {
  children: ReactNode;
  texts: ErrorTextType;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  static propTypes = {
    children: node,
    texts: errorTextsPropType.isRequired
  };

  static defaultProps = {
    children: null
  };

  state: State = {
    error: null
  };

  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Something unexpected had happened', error, errorInfo);
  }

  render() {
    const { error }: { error: Error | null } = this.state;
    const { texts }: ErrorTexts = this.props;

    if (error) {
      return <ErrorComponent error={error.message} texts={texts} />;
    }
    return this.props.children;
  }
}

const mapStateToProps = (state: AppState): ErrorTexts => ({
  texts: state.texts.error
});

export default connect(mapStateToProps)(ErrorBoundary);
