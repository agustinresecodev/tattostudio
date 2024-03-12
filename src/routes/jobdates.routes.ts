import express from 'express';
import { jobdateController } from '../controllers/jobdateController';
import { de } from '@faker-js/faker';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

/////////      PROFILE ROUTES      //////////////////


//obtener todos los usuarios
router.get('/',authMiddleware, jobdateController.getAll);

//obtener usuario por id
router.get('/:id',authMiddleware, jobdateController.getById);

//crear cita
router.post('/register',authMiddleware, jobdateController.create);

//editar usuario
router.put('/:id',authMiddleware, jobdateController.update);

//eliminar usuario
router.delete('/:id',authMiddleware, jobdateController.delete);

export default router;