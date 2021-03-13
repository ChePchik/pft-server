const express = require("express");
const router = express.Router();
const User = require("../../models/User");

/**
 * @route POST api/users/info
 * @desc GET all teacher
 * @access Public
 */
router.post('/user', (req, res) => {
    // console.log(req.body.email);
    User.findOne({ name: req.body.email })
        .select('-password')
        .select('-__v')
        .then(groups => {
            // console.log(groups);
            if (!groups) {
                return res.status(404).json({ error: "User not found" });
            }
            res.json(groups);
        });
});
module.exports = router;