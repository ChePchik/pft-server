const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    thirdname: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        required: true
    },
    test_ids: {
        type: Array,
    },
});
// "ID": 0,
// "Email": "string",
// "Name": "string",
// "Surname": "string",
// "Thirdname": "string",
// "group": "string",
// "Password": "hesh()",
// "Role": "root/admin/user",
// "Date": "string",
// "TestIDs": [1, 2, 33]
module.exports = User = mongoose.model("users", UserSchema);