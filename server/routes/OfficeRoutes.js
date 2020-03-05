const router = require('express').Router();
const OfficeController = require('../controllers/OfficeController.js');

router.post('/', OfficeController.create);
router.get('/', OfficeController.read);
router.get('/:id', OfficeController.readOne);
router.patch('/:id', OfficeController.updateOne);
router.delete('/:id', OfficeController.deleteOne);

module.exports = router;
