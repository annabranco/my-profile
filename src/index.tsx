import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from './redux';
import App from './components/core/App';
import ErrorComponent from './components/core/ErrorBoundary/ErrorComponent';
import {
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
} from './constants';
import { dispatchFetchDatabase } from './utils/fetchData';

const dataBasePaths = [
  EXPERIENCES_PATH,
  FORMATION_PATH,
  LANGUAGES_PATH,
  PROJECTS_PATH,
  SKILLS_PATH,
  TEXTS_PATH
];

const store = getStore();

dispatchFetchDatabase(dataBasePaths)
  .then(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.error(error);
    render(
      <ErrorComponent
        error={`Fail when building up the application => ${error.message}`}
      />,
      document.getElementById('root')
    );
  });
