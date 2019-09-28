// // Require mysql
// // var mysql = require("mysql");

// var Sequelize = require("sequelize");

// // set up our connection info
// var sequelize = new Sequelize("sequelize_brixbiz", "root", "password12", {
//     port: 3306,
//     host: "localhost",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000 
//     // password: "",
//     // database: "brixbizdb"
//     }
// });

// // connect to db - below code works for mysql. Sequelize not tested.
// sequelize.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// //Export connection
// module.exports = sequelize;