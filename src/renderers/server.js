// server side rendering
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';

import App from '../components/App';
import storeConfig from '../store/store';

ReactDOMServer.renderToString(
  <Provider store={storeConfig()}>
    <App />
  </Provider>
);
