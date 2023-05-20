
const getAllDonuts = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donuts": []    
        }
    });

}

const createDonut = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donut": {
                "name": "Chocolate Frosted",
                "topping": "Chocolate",
                "price": 2.50
            }
        }
    });

}

module.exports.createDonut = createDonut;

module.exports.getAllDonuts = getAllDonuts;