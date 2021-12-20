import debug from 'debug';
import dotenv from 'dotenv';
import app from './src/app.js';

import player from './src/Seeds/see_gfsl';

dotenv.config();

const log = debug('dev:index');
const PORT = process.env.PORT;

console.log(`player`, player);

app.listen(PORT, () => log(`Service online ${PORT}`));