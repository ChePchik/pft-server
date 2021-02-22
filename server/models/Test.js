const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TestSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },
    NameTest: {
        type: String,
        required: true
    },
    TimeINsecond: {
        type: Number,
        required: true,
    },
    ErrorCount: { //error < ErrorCount = не сдали
        type: Number,
        required: true,
    },
    AttemptCount: {
        type: Number,
        required: true,
    },
    Questions: {
        // type: Array,
        IDQ: {
            type: String,
        },
        Type: { //checkbox/radiobox/textinput
            type: String,
        },
        Question: { //вопрос
            type: String,
        },
        Note: {
            type: String,
        },
        Answers: {
            idx: {
                type: Number,
            },
            text: {
                type: String,
            },
            right: {
                type: Boolean,
            },
        },
    },
});

module.exports = Test = mongoose.model("test", TestSchema);