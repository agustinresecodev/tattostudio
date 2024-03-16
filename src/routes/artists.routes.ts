import express,{Request, Response} from 'express';
import { artistController } from '../controllers/artistController';
import { authorizeMiddleware } from '../middlewares/authorize';

const router = express.Router();

/////////      ARTISTS ROUTES      //////////////////
router.get('/',authorizeMiddleware(["Artist"]),artistController.getAll);
router.post('/create',authorizeMiddleware(["Admin"]),artistController.create);


export default router;