const express = require("express");
const router = express.Router();
const Group = require("../../models/Groups");
const User = require("../../models/User");

/**
 * @route GET api/group/
 * @desc GET all groups
 * @access Public
 */
router.get('/', (req, res) => {
    Group.find()
        // .select('-_id')
        .then(groups => {
            if (!groups) {
                return res.status(404).json({ error: "Groups not found" });
            }
            res.json(groups);
        });
});
/**
 * @route GET api/group/teacher
 * @desc GET all teacher
 * @access Public
 */
router.get('/teacher', (req, res) => {
    User.find({ "role": "teacher" })
        .select('-test_ids')
        .select('-email')
        .select('-name')
        .select('-thirdname')
        .select('-group')
        .select('-password')
        .select('-date')
        .select('-__v')
        .select('-role')
        .then(groups => {
            if (!groups) {
                return res.status(404).json({ error: "Teacher not found" });
            }
            res.json(groups);
        });
});

/**
 * @route  PUT api/group/:id
 * @desc   Update a group
 * @access Private
 */
router.put('/:id', (req, res) => {
    Group.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(() => {
            Group.findOne({
                    _id: req.params.id
                })
                .then(group => {
                    res.json({
                        success: true,
                        data: group
                    });
                });
        })
        .catch(error => res.status(404).json({
            success: false,
            error: error.message
        }))
});

/**
 * @route  POST api/group/
 * @desc   Create A Group
 * @access Private
 */
router.post("/", (req, res) => {
    const newGroup = new Group({
        name: req.body.name,
        teacherID: req.body.teacherID
    });
    newGroup.save().then(group => res.json(group));
});

/**
 * @route  DELETE api/group/:id
 * @desc   Delete A group
 * @access Private
 */
router.delete("/:id", (req, res) => {
    Group.findById(req.params.id)
        .then(group => group.remove())
        .then(() => res.json({
            success: true,
            id: req.params.id
        }))
        .catch(error => res.status(404).json({
            success: false,
            error: error.message
        }))
});


module.exports = router;