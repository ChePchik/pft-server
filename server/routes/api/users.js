const express = require("express");
const router = express.Router();
const User = require("../../models/User");

/**
 * @route GET api/users/info
 * @desc GET all teacher
 * @access Public
 */
router.get('/info', (req, res) => {
    console.log(req.body.email);
    User.findOne({ email: req.body.email })
        .select('-password')
        .select('-__v')
        .then(groups => {
            console.log(groups);
            if (!groups) {
                return res.status(404).json({ error: "User not found" });
            }
            res.json(groups);
        });
});
module.exports = router;