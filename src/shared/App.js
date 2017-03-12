import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import RouterContext from 'react-router/lib/RouterContext';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Provider from 'react-redux/lib/components/Provider';

import hashLinkScroll from './utils/hashLinkScroll';
import configureStore from './redux/store/configureStore';
import lightBaseTheme from './theme';

injectTapEventPlugin();

function getStore() {
    return typeof window !== 'undefined' ? configureStore( window.__INITIAL_STATE__) : {};
}

class App extends React.Component {
    static propTypes = {
        renderOnServer: PropTypes.bool,
        renderProps: PropTypes.object,
        theme: PropTypes.object,
        store: PropTypes.object,
        history: PropTypes.object,
        getRoutes: PropTypes.func
    };

    static defaultProps = {
        renderOnServer: false,
        theme: lightBaseTheme,
        store: getStore(),
        history: browserHistory,
    };

    render() {
        const { theme, store, ...routerProps  } = this.props;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <Provider store={store}>
                    {this.getRouter({ ...routerProps, store })}
                </Provider>
            </MuiThemeProvider>
        )
    }

    getRouter = ({ history, renderOnServer, renderProps, getRoutes, store }) => {
        if (renderOnServer) {
            return <RouterContext {...renderProps}/>;
        } else {
            return (
                <Router
                    history={history}
                    routes={getRoutes(store)}
                    onUpdate={hashLinkScroll}
                />
            );
        }
    }
}

export default App;