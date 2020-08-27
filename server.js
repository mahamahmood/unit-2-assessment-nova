require('dotenv').config();

// Dependecies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Constant
const PORT = process.env.PORT || 3000;

// Middleware & Database
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to monog!');
});

// Controller

// Default Route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// PORT Listen
app.listen(PORT, () => {
    console.log(`I'm listening on port: ` + PORT);
});