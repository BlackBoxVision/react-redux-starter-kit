import Middlewares from './middleware/Middlewares';
import Config from './config';
import ClusterHelper from './helper/ClusterHelper';
import compression from 'compression';
import bodyParser from 'body-parser';
import Winston from 'winston';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

class Server {
    static init() {
        ClusterHelper
            .runApp()
            .then(() => {
                const app = express();

                app.use(helmet());
                app.use(compression({ level: 9, memLevel: 9 }));
                app.use(bodyParser.json({ limit: '20mb'}));
                app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
                app.use(express.static(path.resolve(__dirname, '../../dist'), { maxAge: 604800000 }));

                app.use(Middlewares.handleRender);
                app.use(Middlewares.handleErrors);

                app.listen(Config.PORT, Config.IP_ADDRESS, (error) => {
                    if (error) {
                        Winston.log(`error`, `An error happen -> ${error}`);
                    }

                    Winston.log(`info`, `Node server listening @ ${Config.PORT}`);
                });
            })
            .catch(err => {
                if (err) {
                    Winston.log(`error`, `There is an error with control manager: ${err}`);
                }
            });
    }
}

export default Server.init();