import { Router } from 'express';
import { usersGET } from '../Controllers/users';

const userRouter = Router();

userRouter.get('/', usersGET);
// userRouter.get('/:id', usersGetById);
// userRouter.post('/new', newUserController);


export default userRouter;