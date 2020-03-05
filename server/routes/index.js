const router = require('express').Router();
const companyRoutes = require('./CompanyRoutes.js');
const officeRoutes = require('./OfficeRoutes.js');

router.use('/companies', companyRoutes);
router.use('/offices', officeRoutes);

module.exports = router;
