const avisRouter = require('./avis.router');
const reservationRouter = require('./reservation.router');
const clientRouter = require('./client.router');
const authRouter = require('./auth.router');

const router = require('express').Router();

router.use('/avis',avisRouter);
router.use('/reservation',reservationRouter);
router.use('/client',clientRouter);
router.use('/auth',authRouter);

module.exports = router;
