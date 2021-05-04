const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	thirdname: {
		type: String,
		required: true,
	},
	group: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: String,
		required: true,
	},
	test_ids: {
		type: Array,
	},
	deleteIS: {
		type: String,
		default: false,
	},
});
module.exports = User = mongoose.model("users", UserSchema);
