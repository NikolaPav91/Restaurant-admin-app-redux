import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
   document.getElementById('root'));
