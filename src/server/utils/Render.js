import React from 'react';
import ReactDOMServer from 'react-dom/server';
import match from 'react-router/lib/match';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import Html from '../../shared/components/common/IndexHtml';
import App from '../../shared/App';


export default class Render {
    static match(routes, location) {
        return new Promise((resolve, reject) => {
            match({ routes, location }, (error, redirectLocation, renderProps) => {
                if (error) {
                    reject(error);
                }

                resolve({ redirectLocation, renderProps });
            })
        });
    }

    static getContent({ store, renderProps, theme, request }) {
        const appTheme = {
            ...theme,
            ...{ userAgent: request.headers['user-agent'] }
        };

        return ReactDOMServer.renderToString(
            <App
                store={store}
                renderProps={renderProps}
                theme={appTheme}
                renderOnServer
            />
        )
    }

    static getHtml({ renderProps, request, store, theme }) {
        const content = Render.getContent({ renderProps, request, store, theme });
        const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

        const html = (
            <Html
                content={content}
                store={store}
                styles={styles}
            />
        );

        return `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`;
    }
}