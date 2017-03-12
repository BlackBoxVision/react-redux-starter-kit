import Middleware from './middleware/Middleware';
import Config from './config';
import Logger from './utils/Logger';
import compression from 'compression';
import bodyParser from 'body-parser';
import Express from 'express';
import helmet from 'helmet';
import path from 'path';

class Server {
    static init() {
        const app = Express();

        app.use(helmet());
        app.use(compression({ level: 9, memLevel: 9 }));
        app.use(bodyParser.json({ limit: '20mb' }));
        app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

        //TODO Add caching capabilities when finish
        app.use(Express.static(path.resolve(__dirname, '../../dist')));

        app.use(Middleware.handleRender);
        app.use(Middleware.handleErrors);

        app.listen(Config.PORT, Config.IP_ADDRESS, error => {
            if (error) {
                Logger.error(`An error happen -> ${error}`);
            }

            Logger.info(`Node server listening @ ${Config.PORT}`);
        });
    }
}

export default Server.init();