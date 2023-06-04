const { response } = require('express');
const Donut = require('../../../models/Donutello');



const createDonut = (req, res) => {

    let donut = new Donut();
    donut.company = req.body.company;
    donut.email = req.body.email;
    donut.phone = req.body.phone;
    donut.donutname = req.body.donutname;
    donut.glaze = req.body.glaze;
    donut.amount = req.body.amount;
    donut.notes = req.body.notes;
    donut.status = "default";
    donut.completed = false; 
    donut.save().then( result => {
       
        res.json({
            "status": "success"
        })

    }).catch((err) => {
        res.json({
            "status": "error"
          
        })
    }
    );


};

const getAllDonuts = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donuts": []
        }
    });
}

const getDonut = (req, res) => {

    res.json({
        "status": "success",
        "data":[]
    });

}

const updateDonut = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donut": []
        }
    });

}

const deleteDonut = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donut": []
        }
    });

}



module.exports.createDonut = createDonut;
module.exports.getAllDonuts = getAllDonuts;
module.exports.getDonut = getDonut;
module.exports.updateDonut = updateDonut;
module.exports.deleteDonut = deleteDonut;