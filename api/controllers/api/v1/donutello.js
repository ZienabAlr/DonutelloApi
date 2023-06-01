const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    company: String,
    email: String,
    phone: String,
    donutname: String,
    glaze: String,
    amount: Number,
    notes: String

})
const Donut = mongoose.model('Donut', donutSchema);

const getAllDonuts = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donuts": []    
        }
    });

}

const createDonut = (req, res) => {

    let donut = new Donut();
    donut.company = req.body.company;
    donut.email = req.body.email;
    donut.phone = req.body.phone;
    donut.donutname = req.body.donutname;
    donut.glaze = req.body.glaze;
    donut.amount = req.body.amount;
    donut.notes = req.body.notes;
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


module.exports.createDonut = createDonut;
module.exports.getAllDonuts = getAllDonuts;