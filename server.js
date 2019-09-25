//Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const businessRouter = require('./routes/businessRouter')

//Set up express App
var app = express();
// var PORT = process.env.PORT || 8080;
var PORT =  8080;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Static directory to be served
// app.use(express.static("app/public"));

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// Routes
// require("/routes/businessRouter.js")(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', businessRouter)

//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});


