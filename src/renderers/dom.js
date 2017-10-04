// const React = require('react');
// const ReactDOM = require('react-dom');

// does not work in node yet. would need to translate import into require statements (babel)
// will work in webpack though
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
