const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose
	.connect(
		"mongodb+srv://projectone822:TcilqtUzJ62gkQBt@cluster0.fbehann.mongodb.net/?retryWrites=true&w=majority",
		{ useNewUrlParser: true }

	).then((data) => {
		console.log(`mongodb connected with server 🚀 : ${data.connection.host}`);
	});
};

module.exports = connectDatabase;