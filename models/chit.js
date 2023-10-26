const mongoose = require("mongoose");

const chitSchema = new mongoose.Schema({
    chit_name : { type: String, unique:true},
    chit_amount : { type: Number },
    start_date : { type: Date, default: Date.now },
    number_of_months: { type: Number },
    commission : { type: Number },


    created_time: { type: Date, default: Date.now },
    last_mod_time: { type: Date, default: Date.now },
});

const customerChitSchema = new mongoose.Schema({
    chit_name : { type: String },
    chit_id : {type: String, unique:true},
    customer_id: { type : String },
    chit_share : { type: Number },

    created_time: { type: Date, default: Date.now },
    last_mod_time: { type: Date, default: Date.now },
});



module.exports = {
    Chit: mongoose.model('Chit', chitSchema),
    CustomerChit :  mongoose.model('CustomerChit', customerChitSchema),
};