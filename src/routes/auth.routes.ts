import express,{Request, Response} from 'express';
import { authController } from '../controllers/authController';

const router = express.Router();

////////////  AUTH ROUTES  ///////////////////

// login
router.post('/login',authController.login)

//register
router.post('/register',authController.register);




export default router;
