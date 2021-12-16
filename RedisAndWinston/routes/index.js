import { Router } from 'express';
import factorialRoute from './Factorial';

const router = Router();

router.use('/factorial', factorialRoute);

export default router;