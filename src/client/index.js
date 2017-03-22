import 'babel-polyfill';
import 'js-polyfills/web';

import React from 'react';
import ReactDOM from 'react-dom';
import theme from '../shared/theme';

import getRoutes from '../shared/routes';
import App from '../shared/App';


ReactDOM.render(<App getRoutes={getRoutes} theme={theme}/>, document.getElementById('app'));