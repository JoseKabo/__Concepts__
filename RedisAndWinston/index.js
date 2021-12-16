import debug from 'debug'
import dotenv from 'dotenv'
import app from './app'
import logger from './utils/index';

dotenv.config()

const log = debug('globant:index')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    // log(`Server is running on port ${PORT} - DEBUG MESSAGE`);
    logger.info(`Server is running on port ${PORT} - Winston MESSAGE`);
})