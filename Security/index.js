require('dotenv').config()

import app from './app';
import debug from 'debug';

const log = debug('globant:index');

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    log(`Server online ${PORT}`);
});