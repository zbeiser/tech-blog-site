const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
