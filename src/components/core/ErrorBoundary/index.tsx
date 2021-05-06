import { Component, ErrorInfo, ReactNode } from 'react';
import { connect } from 'react-redux';
import { node } from 'prop-types';
import { IAppState, IErrorText } from '../../../types/interfaces';
import ErrorComponent from './ErrorComponent';
import { errorTextsPropType } from '../../../types/propTypes';
import defaultTexts from '../../../db/texts.json';

interface ErrorTexts {
  texts: IErrorText | undefined;
}

interface Props {
  children: ReactNode | ReactNode[];
  texts: IErrorText | undefined;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  static propTypes = {
    children: node.isRequired,
    texts: errorTextsPropType
  };

  static defaultProps = {
    texts: defaultTexts.en.error
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
    const { error }: State = this.state;
    const { texts }: ErrorTexts = this.props;

    if (error) {
      return <ErrorComponent error={error.message} texts={texts} />;
    }
    return this.props.children;
  }
}

const mapStateToProps = (state: IAppState): ErrorTexts => ({
  texts: state.texts.error
});

export default connect(mapStateToProps)(ErrorBoundary);
