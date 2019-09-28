//Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const businessRouter = require('../routes/businessRouter')

// Set up express App
var app = express();
// var PORT = process.env.PORT || 8080;
var apiPORT =  3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Static directory to be served
app.use(express.static("app/public"));

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// Routes
// require("/routes/businessRouter.js")(app);
app.use('/api', businessRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
});


//Starts the server to begin listening
app.listen(apiPORT, () => 
    console.log("App listening on PORT " + apiPORT)
);


