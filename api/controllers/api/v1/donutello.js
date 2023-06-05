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
    donut.status = "To do";
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

// get all the donuts in the database
const getAllDonuts = (req, res) => {

    Donut.find().then((result) => {
        res.json({
            "status": "success",
            "data": {
                "donuts": result
            }
        })
    }).catch((err) => {
        res.json({
            "status": "error"
        })
    });

}
// get a single donut by id
const getDonut = (req, res) => {

    Donut.findById(req.params.id).then((result) => {
        res.json({
            "status": "success",
            "data": {
                "donut": result
            }
        })
    }).catch((err) => {
        res.json({
            "status": "error"
        })
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

// const deleteDonut = (req, res) => {

//     res.json({
//         "status": "success",
//         "data": {
//             "donut": []
//         }
//     });

// }

// delete a donut by id
const deleteDonut = (req, res) => {

    Donut.findByIdAndDelete(req.params.id).then((result) => {
        res.json({
            "status": "success",
            "data": {
                "donut": result
            }
        })
    }).catch((err) => {
        res.json({
            "status": "error"
        })
    });

}




module.exports.createDonut = createDonut;
module.exports.getAllDonuts = getAllDonuts;
module.exports.getDonut = getDonut;
module.exports.updateDonut = updateDonut;
module.exports.deleteDonut = deleteDonut;