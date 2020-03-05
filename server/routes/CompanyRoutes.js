const router = require('express').Router();
const CompanyController = require('../controllers/CompanyController.js');

router.post('/', CompanyController.create);
router.get('/', CompanyController.read);
router.get('/:id', CompanyController.readOne);
router.patch('/:id', CompanyController.updateOne);
router.delete('/:id', CompanyController.deleteOne);

module.exports = router;
