const customer = require('../models/customerModel');
const bcrypt = require('bcrypt');

module.exports = function (req, res) {
    const inputemail = req.body.email;
    const inputpassword = req.body.password;



        customer.findOne({email:inputemail}).then((user)=> {
        console.log(user)

        if(user) {
            bcrypt.compare(inputpassword, user.password).then((match)=> {
                if (match) {
                    console.log("password match")
                } else {
                    console.log("not match")
                }
            })
        } else {
            console.log("no input")
        }
    })  
    
    
}