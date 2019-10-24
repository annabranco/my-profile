import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { App } from './components/containers';

const APP_VERSION = 'v0.8.2';

const TEXTS_URL =
  'https://raw.githubusercontent.com/annabranco/my-profile/feature/technical_review/src/db/texts.json';

const loadTexts = fetch(TEXTS_URL)
  .then(response => response.json())
  .then(loadedTexts => {
    console.log('$$$ loadedTexts', loadedTexts);
    return loadedTexts;
  })
  .catch(error => console.error('Failed to fetch texts:', error));

Promise.all([loadTexts])
  .then(textsArray => {
    ReactDOM.hydrate(
      <App texts={textsArray[0]} APP_VERSION={APP_VERSION} />,
      document.getElementById('root')
    );
  })
  .catch(error => console.error(error));
