const express = require('express');
const router = express.Router();
const donutelloController = require('../../../controllers/api/v1/donutello');

router.get('/', donutelloController.getAllDonuts);

router.post('/', (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "title": "Donutello",
            "description": "The Donut Lover's Donut",
            "price": 1.99
            // "img": "https://i.imgur.com/2yjgr2l.jpg"
        }
    });

}); 

module.exports = router;