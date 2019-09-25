// Dependencies for SQL DB if needed


// var connection = require("../config/connection.js");

// //Routes
// module.exports = function(app) {
//     //get all the businesses
//     app.get("/api/all", function(req, res) {
//         var dbQuery = "SELECT * FROM business";
//         connection.query(dbQuery, function(err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
//     });
//     // Add a business
//     app.post("/api/new", function(req, res) {
//         console.log("Business Data: ");
//         console.log(req.body);
//         var dbQuery = "INSERT INTO business (name, website, addressBuilding,	addressStreetNameSecondary, addressStreetName, addressCity,	addressState,	addresZIP,	contactPhoneNumber,	addressBorough,	biztype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//         connection.query(dbQuery, [req.body.name, req.body.website, req.body.addressBuilding, req.body.addressStreetNameSecondary, req.body.addressStreetName, req.body.addressCity, req.body.addressState, req.body.addressZIP, req.body.contactPhoneNumber, req.body.addressBorough, req.body.biztype], function(err, res) {
//             if (err) throw err;
//             console.log("Business Successfully Saved");
//             res.end();
//         });

//     });
// };