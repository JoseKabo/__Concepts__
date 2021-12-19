import express from 'express';
import morgan from 'morgan';
import ActionsRoute from './routes/actions';

const app = express();

app.use(morgan('combined'));
app.use('/actions', ActionsRoute);

app.get('/', (req, res) => {
    res.json({
        msg: 'Root route',
    });
});

const a = 10;

export default app;