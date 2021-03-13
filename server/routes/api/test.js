const express = require("express");
const router = express.Router();
const Test = require("../../models/Test");
/**
 * @route  POST api/test/
 * @desc   Create test
 * @access Private
 */
router.post("/", (req, res) => {
	// console.log(req.body.email);
	const newTest = new Test({
		nameTest: req.body.name,
		attemptCount: 3, //количество попыток
	});
	newTest.save().then((test) => {
		if (!test) {
			return res.status(404).json({ error: "test not created" });
		}
		res.json(test);
	});
});

/**
 * @route  GET api/test/
 * @desc   GET all test
 * @access Public
 */
router.get("/", (req, res) => {
	Test.find()
		.select("-__v")
		.then((test) => {
			if (!test) {
				return res.status(404).json({ error: "test not found" });
			}
			res.json(test);
		});
});

/**
 * @route  DELETE api/test/:id
 * @desc   Delete A test
 * @access Private
 */
router.delete("/:id", (req, res) => {
	Test.findById(req.params.id)
		.then((test) => test.remove())
		.then(() =>
			res.json({
				success: true,
				id: req.params.id,
			})
		)
		.catch((error) =>
			res.status(404).json({
				success: false,
				error: error.message,
			})
		);
});
// /**
//  * @route  PUT api/test/:id
//  * @desc   Update a test
//  * @access Private
//  */
//  router.put('/:id', (req, res) => {
//     Group.findByIdAndUpdate({
//             _id: req.params.id
//         }, req.body)
//         .then(() => {
//             Group.findOne({
//                     _id: req.params.id
//                 })
//                 .then(group => {
//                     res.json({
//                         success: true,
//                         data: group
//                     });
//                 });
//         })
//         .catch(error => res.status(404).json({
//             success: false,
//             error: error.message
//         }))
// });
module.exports = router;
