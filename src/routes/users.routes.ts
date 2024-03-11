import express from 'express';
import { userController } from '../controllers/userController';
const router = express.Router();

//////////      PROFILE ROUTES      //////////////////


//obtener todos los usuarios
router.get('/profiles', userController.getAll);

//obtener usuario por id
router.get('/profiles/:id', userController.getProfileById);

//crear usuario
router.post('/register', userController.create);

//editar usuario
router.put('/profiles/:id',userController.update);


///////////     PROTECTED ROUTES    /////////////////////
router.get('/', (req, res) => {
    res.send('Get Users');
    })


router.get('/:id', (req, res) => {
    res.send('Get User by ID');
    })

router.put('/:id', (req, res) => {
    res.send('Update User');
    })

router.delete('/:id', (req, res) => {
    res.send('Delete User');
    })

export default router;

