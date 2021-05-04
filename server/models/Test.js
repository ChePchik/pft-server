const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TestSchema = new Schema({
<<<<<<< HEAD
	nameTest: {
		// название теста
		type: String,
		required: true,
	},
	authorID: {
		type: String,
		required: true,
	},
	notes: {
		// заметки
		type: String,
		required: false,
	},
=======
	// ID: {
	//     type: Number,
	//     required: true
	// },
	nameTest: {
		type: String,
		required: true,
	},
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
	timeINsecond: {
		//прохождение в секундах
		type: Number,
		required: false,
	},
	errorCount: {
		//error < ErrorCount = не сдали \\ количесвто допустимых ошибок
		type: Number,
		required: false,
	},
	attemptCount: {
		//Количество попыток
		type: Number,
<<<<<<< HEAD
		required: false,
	},
	questions: [
		{
			// type: Array,
			// вопросы
			IDQ: {
				type: Number,
			},
			type: {
				//checkbox/radiobox/textinput
				type: String,
			},
			question: {
				//вопрос
				type: String,
			},
			note: {
				// заметки к конкретному вопросу
				type: String,
			},
			answers: [
				{
					// ответы
					idx: {
						type: Number,
					},
					text: {
						type: String,
					},
					right: {
						type: String,
					},
				},
			],
		},
	],
});
// {
// 	{
// 		"ID": 0,
// 		"NameTest": "string",
// 		"TimeINsecond": "int",
// 		"AuthorID": 0,
// 		"ErrorCount": "error < int = не сдали",
// 		"AttemptCount": "int",
// 		"Questions": [
// 			{
// 				"ID": 0,
// 				"Type": "checkbox",
// 				"Question": "вопрос #1",
// 				"Note": "заметка 1",
// 				"Answers": [
// 					{
// 						"idx": 1,
// 						"text": "вариант ответа 0.1",
// 						"right": "false"
// 					},
// 					{
// 						"idx": 2,
// 						"text": "вариант ответа 0.2",
// 						"right": "false"
// 					},
// 					{
// 						"idx": 3,
// 						"text": "вариант ответа 0.3",
// 						"right": "true"
// 					}
// 				]
// 			},
// 			{
// 				"ID": 1,
// 				"Type": "radiobox",
// 				"Question": "вопрос #2",
// 				"Note": "заметка 2",
// 				"Answers": [
// 					{
// 						"idx": 1,
// 						"text": "вариант ответа 0.1",
// 						"right": "false"
// 					},
// 					{
// 						"idx": 2,
// 						"text": "вариант ответа 0.2",
// 						"right": "false"
// 					}
// 				]
// 			}
// 		]
// 	}

=======
		required: true,
	},
	questions: {
		// type: Array,
		IDQ: {
			type: String,
		},
		type: {
			//checkbox/radiobox/textinput
			type: String,
		},
		question: {
			//вопрос
			type: String,
		},
		note: {
			type: String,
		},
		answers: {
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
/**
 * {
    "ID": 0,
    "NameTest":"string",
    "TimeINsecond":"int",
    "AuthorID": 0,
    "ErrorCount": "error < int = не сдали",
    "AttemptCount":"int",
    "Questions":
[{
    "ID": 0,
    "Type": "checkbox",
    "Question": "вопрос #1",
    "Note": "заметка 1",
    "Answers": [{
            "idx": 1,
            "text": "вариант ответа 0.1",
            "right": "false"
        },
        {
            "idx": 2,
            "text": "вариант ответа 0.2",
            "right": "false"
        },
        {
            "idx": 3,
            "text": "вариант ответа 0.3",
            "right": "true"
        }]
},
{
    "ID": 1,
    "Type": "radiobox",
    "Question": "вопрос #2",
    "Note": "заметка 2",
    "Answers": [{
            "idx": 1,
            "text": "вариант ответа 0.1",
            "right": "false"
        },
        {
            "idx": 2,
            "text": "вариант ответа 0.2",
            "right": "false"
        }]
}]}
 */
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
module.exports = Test = mongoose.model("test", TestSchema);
