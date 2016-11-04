import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styleSheet from 'styled-components/lib/models/StyleSheet'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { match } from 'react-router';
import configureStore from '../../shared/redux/store/configureStore';
import routes from '../../shared/routes.js';
import App from '../../shared/App';
import Html from '../../shared/components/enviroments/Html';

class Middlewares {
    static handleRender(request, response, next) {
        let store = configureStore();

        match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
            if (error)
                return next(error);

            if (!renderProps)
                return next();

            if (redirectLocation)
                return response.redirect(302, redirectLocation.pathname + redirectLocation.search);

            const content = ReactDOMServer.renderToString(
                <App
                    store={store}
                    renderProps={renderProps}
                    renderOnServer={true}
                    theme={{
                        ...lightBaseTheme,
                        ...{
                            userAgent: request.headers['user-agent']
                        }
                    }}
                />
            );

            const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
            const html = (
                <Html
                    content={content}
                    store={store}
                    styles={styles}
                />
            );

            response.status(200);
            response.header('Content-Type", "text/html; charset=utf-8');
            response.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
            response.end();
        })
    }

    static handleErrors(error, request, response, next) {
        console.error(`This is the error --> ${error}`);
        return next();
    }
}

export default Middlewares;