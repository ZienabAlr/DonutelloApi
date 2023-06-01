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
module.exports= Donut; 