import { Router } from 'express';
import debug from 'debug';

const actionsRoute = Router();
const log = debug(`${process.env.NODE_ENV || 'dev'}:actions`);

actionsRoute.get('/:number', (req, res) => {
    const { number } = req.params;
    if (typeof number === 'string') {
        log(`Somenthings wrong ${number}`);
        return res.status(400).json({
            msg: 'Invalida value type',
        });
    }
    const random = Math.random();
    log(`Random number ${random}`);
    return res.json({
        msg: `Your new lucky number is ${random}`,
    });
});

export default actionsRoute;