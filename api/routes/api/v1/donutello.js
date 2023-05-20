const express = require('express');
const router = express.Router();
const donutelloController = require('../../../controllers/api/v1/donutello');

router.get('/', donutelloController.getAllDonuts);

router.post('/', donutelloController.createDonut); 

module.exports = router;