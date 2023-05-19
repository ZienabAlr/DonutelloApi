const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donuts": []    
        }
    });

});

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
