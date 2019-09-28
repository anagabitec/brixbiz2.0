const express = require('express');
const BusinessCtrl = require('../controllers/bizController.js');
const router = express.Router();

router.post('/business', BusinessCtrl.createBusiness);
router.put('/business/:id', BusinessCtrl.updateBusiness);
router.delete('/business/:id', BusinessCtrl.deleteBusiness);
router.get('/business/:id', BusinessCtrl.getBusinessById);
router.get('/businesses', BusinessCtrl.getBusiness);

module.exports = router;

// {
// 	"name" : "The Meat Hook",
// 	"website" : "www.the-meathook.com",
// 	"address" : {
// 		"Address Building" : "397",
// 		"Address Street Name" : "Graham Ave",
// 		"Addres City" : "Brooklyn", 
// 		"Address State" : "NY",
// 		"ZIP" :	"11211"
// 		},
// 	"Contact Phone Number" : "718 609 9300",
// 	"brixbiz Registered": false,
// 	"Inventory Listed": false,
// 	"Business Type" : [
// 		"Butcher",
// 		"Grocer",
// 		"Classes"
// 		],
// 	"tags" : [
// 		"Meat",
// 		"Cheese"
// 		] 
// }