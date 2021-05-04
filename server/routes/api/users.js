const express = require("express");
const router = express.Router();
const User = require("../../models/User");

/**
 * @route POST api/users/user
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
