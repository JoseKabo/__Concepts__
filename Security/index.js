import app from './app';
import debug from 'debug';

const log = debug('globant:index');

const PORT = precess.env.PORT || 3000;

app.listen(PORT, () => {
    log('ONLINES');
});