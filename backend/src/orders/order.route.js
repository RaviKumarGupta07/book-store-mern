const express = require("express");
const Order = require("./order.model")
const router = express.Router();
const {createAOrder} = require("./order.controller")

// post a book

// create order endpoint
router.post("/",createAOrder)

module.exports = router 