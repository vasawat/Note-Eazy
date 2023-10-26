const customer = require('../models/customerModel');
const axios = require('axios');


module.exports = function (req, res) {

    const userData = req.body;


    customer.create(userData).then(() => {
        console.log("user registered!!")
        // res.redirect('/')
    }).catch((error)=> {
        console.log("OMGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
        console.log(error);
        });
        
}
