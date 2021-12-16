import devLogger from './devLogger';
import prodLogger from './prodLogger';

let logger = null;

(process.env.ENVIRONMENT !== 'PROD') ? logger = devLogger(): logger = prodLogger();

export default logger;