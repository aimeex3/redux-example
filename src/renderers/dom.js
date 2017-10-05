// const React = require('react');
// const ReactDOM = require('react-dom');

// does not work in node yet. would need to translate import into require statements (babel)
// will work in webpack though
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from '../components/App';
import store from '../store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
