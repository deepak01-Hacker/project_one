const catchAsyncError = require("../middleware/catchAsyncError");
const { User } = require("../models/customer");

exports.createCustomer = catchAsyncError(async (req, res, next) => {
    if (!req.body){
        return res.status(400).json({ message: "All fields are required"});
    }
    
    await User.create(req.body);
    return res.status(200).json({ success: true, message: "User created Successfully" });
});


exports.fetchAllCustomers = catchAsyncError(async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const per_page = parseInt(req.query.perPage) || 10;

    const response = await User.find()
    .sort({ created_time: -1 })
    .skip((page - 1) * per_page)
    .limit(per_page)
    .exec();

    return res.status(200).json({ success: true, message: "User created Successfully", users: response});
});

