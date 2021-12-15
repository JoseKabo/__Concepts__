import express from 'express';
import helmet from 'helmet';
import router from './routes/index';

const app = express();

app.use(helmet());
app.use(express.json());

app.use(router);

app.use('/', (req, res) => {
    res.json({
        msg: 'root route'
    });
});

export default app;