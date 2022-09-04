const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');


const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//connect to db
const URI = process.env.URI;
mongoose.connect(URI, {useNewUrlParser: true}).then(()=>console.log('MongoDB connected successfully')).catch(err => console.log(err));

//Print to server that its listening at given port
const port = process.env.PORT;

app.use(cors());

//create user schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});









app.listen(port, ()=> console.log(`Server listening on port ${port}`));