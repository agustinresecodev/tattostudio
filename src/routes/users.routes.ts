import express from 'express';

const router = express.Router();

//////////      PROFILE ROUTES      //////////////////

router.get('/profile', (req, res) => {
    res.send('Get User Profile');
    })

router.put('/profile', (req, res) => {
    res.send('Update User Profile');
    })

router.get('/jobdates', (req, res) => {
    res.send('Get User Job Dates');
    })

router.get('/jobdates/:id', (req, res) => {
    res.send('Get User Job Date by ID');
    })

router.post('/jobdates', (req, res) => {
    res.send('Create User Job Date');
    })

router.put('/jobdates/:id', (req, res) => {
    res.send('Update User Job Date');
    })

router.delete('/jobdates/:id', (req, res) => {
    res.send('Delete User Job Date');
    })


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

