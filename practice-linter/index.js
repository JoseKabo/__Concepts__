import debug from 'debug';
import dotenv from 'dotenv';

dotenv.config();

import app from './src/app';


const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';
const log = debug(`${env}:index`);

app.listen(PORT, () => log(`Server online ${PORT}`));