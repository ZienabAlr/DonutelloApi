const mongoose = require('mongoose');
const schema = mogoose.Schema;
const donutSchema = new schema({
    name: String,
    topping: String,
    price: Number
});
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

    let newDonut = new Donut();
    newDonut.name = "Chocolate Frosted";
    newDonut.topping = "Chocolate";
    newDonut.price = 2.50;
    newDonut.save((err, doc)=> {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": doc
                }
            });
        } 
    });

}

module.exports.createDonut = createDonut;

module.exports.getAllDonuts = getAllDonuts;