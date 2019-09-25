// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js")

// var Business = sequelize.define("business", {
//     name: Sequelize.STRING,
//     website: Sequelize.STRING, 
//     addressBuilding: Sequelize.STRING,
//     addressStreetName: Sequelize.STRING,
//     secondaryAddressStreetName: Sequelize.STRING,
//     addressCity: Sequelize.STRING,
//     addressState: Sequelize.STRING,
//     addresZIP: Sequelize.STRING,
//     phoneNumber: Sequelize.STRING,
//     bizType: Sequelize.STRING, 
// });

// Business.sync();


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bizSchema = Schema(
    {
        name: { type: String, required: true },
        website: { type: String, required: false },
        address: {
            addressBuilding: { type: String, required: true },
            addressStreetName: { type: String, required: true },
            addressCity: { type: String, required: true },
            addressState: { type: String, required: true },
            addresZIP: { type: String, required: true }
        },
        phoneNumber: { type: String, required: true },
        brixbizRegistered: { type: Boolean, required: true },
        inventoryListed: { type: Boolean, required: true },
        businessType: [],
        tags: []

});
const Business = mongoose.model("Business", bizSchema);

module.exports= Business;