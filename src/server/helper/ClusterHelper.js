import Config from '../config';
import control from 'strong-cluster-control';
import Winston from 'winston';
import cluster from 'cluster';
import os from 'os';

class ClusterHelper {
    static runApp() {
        return new Promise((resolve, reject) => {
            if (Config.isProd()) {
                control
                    .start({ size: control.CPUS, shutdownTimeout: 5000, terminateTimeout: 5000, throttleDelay: 5000 })
                    .on('error', error => reject(error));

                if (cluster.isMaster) {
                    let cpus = os.cpus().length;
                    for (let i = 0; i < cpus; i++) {
                        cluster.fork();
                    }

                    cluster.on('exit', (worker, code, signal) => {
                        if (signal) {
                            Winston.log(`error`, `worker ${worker.process.pid} was killed by signal: ${signal}`);
                        } else if (code !== 0) {
                            Winston.log(`error`, `worker ${worker.process.pid} exited with error code: ${code}`);
                        } else {
                            Winston.log(`info`, `worker ${worker.process.pid} success!`);
                        }
                    });
                } else {
                    resolve();
                }
            } else {
                resolve();
            }
        });
    }
}

export default ClusterHelper;