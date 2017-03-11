import 'babel-polyfill';
import 'js-polyfills/web';
import { polyfill } from 'smoothscroll-polyfill';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'material-ui/styles/baseThemes/lightBaseTheme';

import getRoutes from '../shared/routes.js';
import App from '../shared/App';

polyfill();
injectTapEventPlugin();

ReactDOM.render(<App getRoutes={getRoutes} theme={theme}/>, document.getElementById('app'));