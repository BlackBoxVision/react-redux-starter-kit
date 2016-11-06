import Winston from 'winston';

class Logger {
    static debug(message) {
        Winston.log(`debug`, message);
    }

    static error(message) {
        Winston.log(`error`, message);
    }

    static info(message) {
        Winston.log(`info`, message);
    }
}

export default Logger;