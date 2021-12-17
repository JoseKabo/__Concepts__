import { Router } from 'express';
import factorialMethod from '../lib/Factorial';
import debug from 'debug';
import client from '../db/redis';
import logger from '../utils/index';

const log = debug('globant:factorialEP');
const router = Router();

router.get('/:n', async(req, res) => {
    try {
        const { n } = req.params;

        await client.connect();
        let result = await client.get(n);
        logger.info(`Request to redis ${result}`);

        if (!result) {
            result = factorialMethod(parseInt(n));
            await client.set(n, result);
        }

        client.quit();
        res.json({
            msg: `Factortial ${n} es ${result}`
        });
    } catch (error) {
        res.json({
            msg: error
        })
        logger.error(`Somethings wrong - ${error}`);
    }
});

export default router;