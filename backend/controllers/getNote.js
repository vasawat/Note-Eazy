const Note = require('../models/noteModel');


module.exports = function (req, res) {



    Note.find().then((user)=> {
        res.send(user);
    })  
    
        
}
