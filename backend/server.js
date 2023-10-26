const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const notes = require('./notes');
const connectDB = require('./config/db')

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/',(req,res) => {
    res.send("test api")
});



const storeCustomer = require('./controllers/storeCustomer');
const Login = require('./controllers/Login');
const storeNote = require('./controllers/storeNote');
const deleteNote = require('./controllers/deleteNote');
const editNote = require('./controllers/editNote');
const getNote = require('./controllers/getNote')

app.use('/api/store/customer',storeCustomer);
app.use('/api/login',Login);
app.use('/api/store/note',storeNote);
app.use('/api/delete/note/:id',deleteNote);
app.use('/api/edit/note',editNote);
app.use('/api/notes',getNote);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("this server run on PORT 5000"));