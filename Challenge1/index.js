import dotenv from 'dotenv';
import debug from 'debug';

import app from './src/app.js';

dotenv.config();

const env = process.env.NODE_ENV || 'dev';
const logger = debug(`${env}:index`);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger(`Server running ${PORT}`);
});