import express from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

//////////      PROFILE ROUTES      //////////////////




//get user id
router.get('/:id', authMiddleware, userController.getProfileById);

//crear usuario
router.post('/create',authMiddleware, userController.create);

//editar usuario
router.put('/edit/:id',authMiddleware ,userController.update);


///////////     PROTECTED ROUTES    /////////////////////

//get all users
router.get('/', authMiddleware, userController.getAll);




export default router;

