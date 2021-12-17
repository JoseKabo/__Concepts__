import { Router } from 'express';
import { usersGET } from '../Controllers/users';

const userRouter = Router();

userRouter.get('/', usersGET);

export default userRouter;