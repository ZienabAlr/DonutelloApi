const express = require('express');
const router = express.Router();
const donutelloController = require('../../../controllers/api/v1/donutello');

router.get('/', donutelloController.getAllDonuts);

router.post('/', donutelloController.createDonut); 

router.get('/:id', donutelloController.getDonut);

router.put('/:id', donutelloController.updateDonut);

router.delete('/:id', donutelloController.deleteDonut);

module.exports = router;