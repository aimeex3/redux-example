const React = require('react');
const ReactDOM = require('react-dom');

// does not work in node yet. would need to translate import into require statements (babel)
// will work in webpack though
// import React from 'react';
// import ReactDOM from 'react-dom';
console.log('HIIIII');
ReactDOM.render(
  <h2> Hello React with JSX2</h2>,
  // React.createElement('h2', null, 'Hello React2'),
  document.getElementById('root'),
);
