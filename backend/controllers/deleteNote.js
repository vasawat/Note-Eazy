const Note = require('../models/noteModel');
const axios = require('axios');


module.exports = async function (req, res) {

    const noteId = req.params.id;

    console.log(noteId)

    await Note.findByIdAndDelete(noteId).then(() => {
        console.log("deleted !!")
    }).catch((error)=> {
        console.log(error);
        });
        
}
