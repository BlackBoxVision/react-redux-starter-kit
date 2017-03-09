import React from 'react';
import styleSheet from 'styled-components/lib/models/StyleSheet'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import match from 'react-router/lib/match';
import configureStore from '../../shared/redux/store/configureStore';
import Html from '../../shared/components/enviroments/Html';
import routes from '../../shared/routes.js';
import App from '../../shared/App';

import renderer from 'rapscallion/lib/renderer';

const render = jsx => new renderer(jsx);

class Middlewares {
    static handleRender({ url, headers }, response, next) {
        let store = configureStore();

        match({ routes, location: url }, (error, redirectLocation, renderProps) => {
            if (error) {
                response.status(500);
                response.send(error.message);
                response.end();
            }

            if (redirectLocation) {
                response.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            if (renderProps) {
                render(
                    <App
                        store={store}
                        renderProps={renderProps}
                        renderOnServer={true}
                        theme={{
                            ...lightBaseTheme,
                            ...{
                                userAgent: headers['user-agent']
                            }
                        }}
                    />
                )
                .toPromise()
                .then(html => {
                    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

                    response.status(200);
                    response.header('Content-Type", "text/html; charset=utf-8');

                    render(
                        <Html
                            content={html}
                            store={store}
                            styles={styles}
                        />
                    )
                    .toStream()
                    .pipe(response);
                });
            } else {
                response.status(404);
                response.send('Not found');
                response.end();
            }
        })
    }

    static handleErrors(error, request, response, next) {
        console.error(`This is the error --> ${error}`);
        return next();
    }
}

export default Middlewares;