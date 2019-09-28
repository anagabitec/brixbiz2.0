const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let BizSchema = new Schema({
        name: { type: String },
        website: { type: String },
        address: {
            addressBuilding: { type: String },
            addressStreetName: { type: String },
            addressCity: { type: String },
            addressState: { type: String },
            addresZIP: { type: Number }
        },
        phoneNumber: { type: String },
        brixbizRegistered: { type: Boolean},
        inventoryListed: { type: Boolean },
        businessType: [],
        tags: []
});

let Business = mongoose.model("Business", BizSchema);

module.exports= Business;

// module.exports = mongoose.model("Business", bizSchema)