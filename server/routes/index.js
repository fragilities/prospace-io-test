const router = require('express').Router()
const companyRoutes = require('./CompanyRoutes.js')
const officeRoutes = require('./OfficeRoutes.js')

router.use('/companies', companyRoutes)
router.officeRoutes('/offices', officeRoutes)

module.exports = router