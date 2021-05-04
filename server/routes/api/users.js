const express = require("express");
const router = express.Router();
const User = require("../../models/User");

/**
<<<<<<< HEAD
 * @route POST api/users/user
=======
 * @route POST api/users/info
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
 * @desc GET all teacher
 * @swagger
 * /api/users/user:
 *   post:
 *     tags:
 *         - Users
 *     summary: получаем пользователя по емайлу
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@test.ru
 *     responses:
 *       200:
 *         description: Получаем данные пользователя без пароля
 */
<<<<<<< HEAD
router.post("/user", (req, res) => {
	// console.log(req.body.email);
	User.findOne({ email: req.body.email })
		.select("-password")
		.select("-__v")
		.then((groups) => {
			// console.log(groups);
			if (!groups) {
				return res.status(404).json({ error: "User not found" });
			}
			res.json(groups);
		});
=======
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
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
});

/**
 * @swagger
 * /api/users/user:
 *   get:
 *     tags:
 *         - Users
 *     summary: Получение всех пользователей
 *     responses:
 *       200:
 *         description: Получаем данные всех пользователя без пароля
 */
router.get("/user", (req, res) => {
	User.find({ deleteIS: "false" })
		.select("-password")
		.select("-__v")
		.then((groups) => {
			// console.log(groups);
			if (!groups) {
				return res.status(404).json({ error: "User not found" });
			}
			res.json(groups);
		});
});

module.exports = router;
