const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GroupsSchema = new Schema({
	// id: {
	//     type: Number,
	//     required: false
	// },
	name: {
		type: String,
		required: true,
	},
	teacherID: {
		type: String,
		required: true,
	},
});

module.exports = User = mongoose.model("groups", GroupsSchema);
