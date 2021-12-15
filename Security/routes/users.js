import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    const { email, name, password, username } = req.body;

});

export default router;