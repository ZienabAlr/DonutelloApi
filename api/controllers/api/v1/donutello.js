
const getAllDonuts = (req, res) => {

    res.json({
        "status": "success",
        "data": {
            "donuts": []    
        }
    });

}

module.exports.getAllDonuts = getAllDonuts;