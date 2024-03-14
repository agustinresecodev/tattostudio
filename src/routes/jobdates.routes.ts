import express from 'express';
import { jobdateController } from '../controllers/jobdateController';
import { de } from '@faker-js/faker';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

/////////      JOBDATES ROUTES      //////////////////


//get all jobdates
router.get('/',authMiddleware, jobdateController.getAll);

//get jobdatebyid
router.get('/:id',authMiddleware, jobdateController.getById);

//create jobdate
router.post('/create',authMiddleware, jobdateController.create);

//edit jobdate
router.put('/:id',authMiddleware, jobdateController.update);

//delete date
router.delete('/:id',authMiddleware, jobdateController.delete);

//get jobdates by client
router.get('/client/jobdates',authMiddleware, jobdateController.getByLogedClient);

//get jobdates by artist
router.get('/artist/jobdates',authMiddleware, jobdateController.getByLogedArtist);

export default router;