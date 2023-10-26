const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    chit_id: {type:String},
    auction_amount : {type:String},
    distribution_date : { type:Date },
    auction_date : {type:Date},
    auction_winner_id : {type:String}
});

module.exports = {
    Auction: mongoose.model('Auction', auctionSchema),
};