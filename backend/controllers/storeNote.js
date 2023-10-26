const Note = require('../models/noteModel');
const axios = require('axios');


module.exports = function (req, res) {

    const userData = req.body;


    Note.create(userData).then(() => {
        console.log("Note registered!!")
    }).catch((error)=> {
        console.log(error);
        });
        
}
