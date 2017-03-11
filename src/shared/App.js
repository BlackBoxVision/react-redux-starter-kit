import React, { Component, PropTypes } from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import RouterContext from 'react-router/lib/RouterContext';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Provider from 'react-redux/lib/components/Provider';
import hashLinkScroll from './utils/hashLinkScroll';
import configureStore from './redux/store/configureStore';

class App extends Component {
    static propTypes = {
        renderOnServer: PropTypes.bool,
        renderProps: PropTypes.object,
        theme: PropTypes.object,
        store: PropTypes.object,
        history: PropTypes.object,
        getRoutes: PropTypes.func.isRequired
    };

    static defaultProps = {
        renderOnServer: false,
        theme: lightBaseTheme,
        store: typeof window !== 'undefined' ? configureStore(window.__INITIAL_STATE__) : {},
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