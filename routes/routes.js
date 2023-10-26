const express = require("express");
const { createCustomer, fetchAllCustomers } = require("../controllers/user");
const { addChit } = require("../controllers/chit_auction");

const router = express.Router();

router.route("/create-customer").post(createCustomer);
router.route("/fetch-all-customer").get(fetchAllCustomers);

router.route("/add-chit").post(addChit);

module.exports = router;

