
import express from 'express';

import usersRoutes from './users.routes';
import baseRoutes from './base.routes';
import jobdatesRoutes from './jobdates.routes';
import authRoutes from './auth.routes';
import artistRoutes from './artists.routes'

const router = express.Router();

//////////      API ROUTES      //////////////////
router.use('/', baseRoutes);
router.use('/users', usersRoutes);
router.use('/jobdates', jobdatesRoutes);
router.use('/auth',authRoutes);
router.use('/artists',artistRoutes);

export default router;