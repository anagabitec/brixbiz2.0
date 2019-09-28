// const db = require("../models/businessModel");

// // 20-react activity 09
// // Define methods for the bizController
// module.export = {
//     findNearby: function(req, res) {
//         db.Business
//         .find(req.query)
//         .sort({ proximity: 1})
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res) {

//     }
// }

// ref medium.com
// import Business from "../models"
const Business = require('../models/businessModel.js');

createBusiness = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide business information',
        })
    }

    const business = new Business(body)
    if (!business) {
        return res.status(400).json({ success: false, error: err})
    }
    business
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: business._id,
                message: 'Business added',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Business not created",
            })
        })
}

updateBusiness = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Business.findOne({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Business not found',
            })
        }
        business.name = body.name
        business.website = body.website
        business.address = body.address
        business.phoneNumber = body.phoneNumber
        business.brixbizRegistered = body.brixbizRegistered
        business.inventoryListed = body.inventoryListed
        business.businessType = body.businessType
        business.tags = body.tags
        business
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: business._id,
                    message: 'Business updated',
                })
            })
            .catch(error =>{
                return res.status(404).json({
                    error,
                    message: 'Business not updated',
                })
            })
    })
}

deleteBusiness = async (req, res) => {
    await Business.findOneAndDelete({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!business) {
            return res
                .status(404)
                .json({ success: false, error: 'Business not found' })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getBusinessById = async (req, res) => {
    await Business.findOne({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!business) {
            return res
                .status(404)
                .json({ success: false, error : 'Business not found' })
        }
        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

getBusiness = async (req, res) => {
    await Business.find({}, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!business.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Business not found'})
        }
        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

module.exports = {
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinessById,
    getBusiness
}