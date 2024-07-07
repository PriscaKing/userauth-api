import { Router } from 'express';
import { handleUserLogin, handleUserSignup} from '../controllers/users.js';


const userRouter = Router();


userRouter.post('/users', handleUserSignup);

userRouter.post('/login', handleUserLogin);


export default userRouter;