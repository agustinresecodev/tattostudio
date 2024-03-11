
import express from 'express';

import usersRoutes from './users.routes';
import baseRoutes from './base.routes';
import jobdatesRoutes from './jobdates.routes';
const router = express.Router();

//////////      API ROUTES      //////////////////
router.use('/', baseRoutes);
router.use('/users', usersRoutes);
router.use('/jobdates', jobdatesRoutes);
export default router;