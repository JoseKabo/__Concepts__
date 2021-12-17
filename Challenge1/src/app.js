import express from 'express';
import morgan from 'morgan';

import routes from './Routes/index.js';

const app = express();

app.use(morgan('combined'));

app.use(routes);

app.get('/', (req, res) => {
    res.send({
        message: 'Root route'
    })
})

export default app;