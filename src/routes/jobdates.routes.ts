import express from 'express';
import { jobdateController } from '../controllers/jobdateController';
import { de } from '@faker-js/faker';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

/////////      PROFILE ROUTES      //////////////////


//get all jobdates
router.get('/',authMiddleware, jobdateController.getAll);

//get jobdatebyid
router.get('/:id',authMiddleware, jobdateController.getById);

//create jobdate
router.post('/register',authMiddleware, jobdateController.create);

//edit jobdate
router.put('/:id',authMiddleware, jobdateController.update);

//delete date
router.delete('/:id',authMiddleware, jobdateController.delete);

//get jobdates by client
router.get('/client/jobdates',authMiddleware, jobdateController.getByClient);

//get jobdates by artist
//router.get('/artist/jobdates',authMiddleware, jobdateController.getByArtist);

export default router;