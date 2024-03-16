
import express from 'express';

import usersRoutes from './users.routes';
import baseRoutes from './base.routes';
import jobdatesRoutes from './jobdates.routes';
import authRoutes from './auth.routes';
import artistRoutes from './artists.routes'

const router = express.Router();

//////////      API ROUTES      //////////////////

// base routes
router.use('/', baseRoutes);

// users routes
router.use('/users', usersRoutes);

// jobdates routes
router.use('/jobdates', jobdatesRoutes);

// auth routes
router.use('/auth',authRoutes);

// artists routes
router.use('/artists',artistRoutes);

export default router;