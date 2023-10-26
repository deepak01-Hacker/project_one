const catchAsyncError = require("../middleware/catchAsyncError");
const { Chit, CustomerChit } = require("../models/chit");
const { Auction } = require("../models/auction");

exports.addChit = catchAsyncError(async (req, res, next) => { // Add chit
    if (!req.body){
        return res.status(400).json({ message: "All fields are required"});
    }

    const customers_sharechits = req.body.customers_sharechits;
    delete req.body.customers_sharechits;
    const chit = await Chit.create(req.body);

    for (let i = 0; i < customers_sharechits.length; i++) {
        const sharechit = customers_sharechits[i];
        const customerChit_pyload = {
            chit_id:chit.id,
            customer_id:sharechit.customer_id,
            chit_share:sharechit.chit_share
        }
        await CustomerChit.create(customerChit_pyload);    
    }
    return res.status(200).json({ success: true, message: "Chit created Successfully" });
});