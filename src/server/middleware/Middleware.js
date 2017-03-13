import React from 'react';

import configureStore from '../../shared/redux/store/configureStore';
import getRoutes from '../../shared/routes';
import theme from '../../shared/theme';
import Response from '../utils/Response';
import Render from '../utils/Render';
import Logger from '../utils/Logger';


class Middleware {
    static async handleRender(request, response, next) {
        const store = configureStore();

        try {
            const { redirectLocation, renderProps } = await Render.match(getRoutes(store), request.url);

            if (redirectLocation) {
                Response.send(response, {
                    status: 302,
                    redirect: redirectLocation.pathname + redirectLocation.search
                });
            }

            if (renderProps) {
                Response.send(response, {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    },
                    data: Render.getHtml({ renderProps, request, store, theme })
                });
            } else {
                Response.send(response, {
                    status: 404,
                    data: 'Not found'
                });
            }
        } catch (error) {
            next(error);
        }
    }

    static handleErrors(error, request, response, next) {
        if (error) {
            Logger.error(`There was an error -> ${error}`);
        }

        return next();
    }
}

export default Middleware;