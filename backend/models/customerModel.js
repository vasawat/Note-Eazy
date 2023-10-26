const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
    nameCustomer: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
},{timestamps:true});

customerSchema.pre('save', function(next){
    const customer = this

    bcrypt.hash(customer.password, 10).then((hash) => {
        customer.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
});


const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;