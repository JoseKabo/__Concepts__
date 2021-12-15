import { Router } from 'express';
import debug from 'debug';

const log = debug('globant:auth');
const router = Router();

router.post('/login', (req, res) => {
    log(req.body);
    res.json({
        data: req.body
    })
});

export default router;