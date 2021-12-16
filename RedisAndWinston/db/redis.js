import { createClient } from 'redis';
import logger from '../utils/index';
// import debug from 'debug';

// const log = debug('globant:redis');

const client = createClient({
    url: 'redis://localhost:6379'
});

client.on('error', err => {
    // log(`Redis error ${err}`);
    logger.error(`Redis error ${err}`);
});

export default client;