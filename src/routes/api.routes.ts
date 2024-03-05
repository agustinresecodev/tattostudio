
import express from 'express';

import usersRoutes from './users.routes';
import baseRoutes from './base.routes';

const router = express.Router();

//////////      API ROUTES      //////////////////
router.use('/', baseRoutes);
router.use('/user', usersRoutes);

export default router;