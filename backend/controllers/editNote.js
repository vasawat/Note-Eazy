const Note = require('../models/noteModel');


module.exports = async function (req, res) {

    const noteId = req.by.noteid;
    const title = req.by.title;
    const category = req.by.category;
    const content = req.by.content;

    console.log(noteId)

    await Note.findByIdAndUpdate(noteId,{
        title: title,
        category: category,
        content: content
    }).then(() => {
        console.log("updated !!")
    }).catch((error)=> {
        console.log(error);
        });
        
}
