const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name : { type: String },
    last_name : { type: String },
    email: { type: String, required: true },
    country_code: { type: String, required: false },
    phone_number: { type: Number, required: false },
    user_type: { type: String, default: 'customer'},
    photo_id: { type: String },
    created_time: { type: Date, default: Date.now },
    last_mod_time: { type: Date, default: Date.now },
    is_active : { type:Boolean, default:false },
});

module.exports = {
    User: mongoose.model('User', userSchema),
};