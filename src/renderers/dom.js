// const React = require('react');
// const ReactDOM = require('react-dom');

// does not work in node yet. would need to translate import into require statements (babel)
// will work in webpack though
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from '../components/App';
import storeConfig from '../store/store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

// issue because using exact same store and store is a singleton
ReactDOM.render(
  <div>
    <Provider store={storeConfig()}>
      <App />
    </Provider>
    <Provider store={storeConfig()}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
);
