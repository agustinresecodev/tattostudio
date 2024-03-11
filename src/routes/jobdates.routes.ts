import express from 'express';
import { jobdateController } from '../controllers/jobdateController';
import { de } from '@faker-js/faker';
const router = express.Router();

/////////      PROFILE ROUTES      //////////////////


//obtener todos los usuarios
router.get('/', jobdateController.getAll);

//obtener usuario por id
router.get('/:id', jobdateController.getById);

//crear cita
router.post('/register', jobdateController.create);

//editar usuario
router.put('/:id',jobdateController.update);

//eliminar usuario
router.delete('/:id',jobdateController.delete);

export default router;