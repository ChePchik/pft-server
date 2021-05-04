require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const keys = process.env.secretOrKey || "super_puper_secret_key";
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

/**
 * @route POST api/auth/register
 * @desc Register user
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *         - Users
 *     summary: Регистируем пользователя
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                   type: String
 *                   required: true
 *                   example: Имя
 *                   description: обязательно
 *               surname:
 *                   type: String
 *                   required: true
 *                   description: обязательно
 *                   example: Фамилия
 *               thirdname:
 *                   type: String
 *                   required: true
 *                   description: обязательно
 *                   example: Отчество
 *               group:
 *                   type: String
 *                   required: true
 *                   description: обязательно
 *                   example: Преподаватель
 *               email:
 *                   type: String
 *                   required: true
 *                   description: обязательно
 *                   example: e@mail.ru
 *               password:
 *                   type: String
 *                   required: true
 *                   minlength: 6
 *                   description: обязательно
 *                   example: 5fff27c66127ad0518248f10
 *               password2:
 *                   type: String
 *                   required: true
 *                   minlength: 6
 *                   description: обязательно
 *                   example: 5fff27c66127ad0518248f10
 *               date:
 *                   type: Date
 *                   example: 2021-02-05T23:32:23.946Z
 *                   description: обязательно
 *               role:
 *                   type: String
 *                   required: true
 *                   description: обязательно
 *                   example: teacher
 *     responses:
 *       200:
 *         description: Получаем данные пользователя без пароля
 *       400:
 *         description: Bad Request
 */
router.post("/register", (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			return res
				.status(400)
				.json({ email: "Адрес электронной почты уже существует" });
		} else {
			const newUser = new User({
				// id: req.body.id,
				email: req.body.email,
				name: req.body.name,
				surname: req.body.surname,
				thirdname: req.body.thirdname,
				group: req.body.group,
				password: req.body.password,
				role: req.body.role,
				date: req.body.date,
				deleteIS: "false",
				role: "user",
			});

			// Хешировать пароль перед сохранением в базе данных
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
});

/**
 * @route POST api/auth/login
 * @desc Login user and return JWT token
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *         - Users
 *     summary: Получение подтвержения и токена JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                   type: String
 *                   required: true
 *                   example: e@mail.ru
 *               password:
 *                   type: String
 *                   required: true
 *                   minlength: 6
 *                   example: 5fff27c66127ad0518248f10
 *     responses:
 *       200:
 *         description: Получаем подтвержении и токен
 *       400:
 *         description: Bad Request
 */
router.post("/login", (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	const { email, password } = req.body;

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	// Find user by email
	User.findOne({ email }).then((user) => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ error: "Email не найден" });
		}

		// Check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				// Соответствует пользователю
				// Создание полезной нагрузки JWT
				const payload = {
					id: user.id,
					email: user.email,
				};

				// Sign token
				jwt.sign(
					payload,
					keys,
					{
						expiresIn: 604800, // 1 неделя
						// 31556926, // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: token,
						});
					}
				);
			} else {
				return res.status(400).json({ error: "пароль неверный" });
			}
		});
	});
});

router.delete("/delete/:id", (req, res) => {
	// удаление пользователя по id
	User.findByIdAndUpdate(
		{
			_id: req.params.id,
		},
		{ deleteIS: "true" }
		// req.body
	)
		.then(() => {
			User.findOne({
				_id: req.params.id,
			}).then((group) => {
				res.json({
					success: true,
					// data: group,
				});
			});
		})
		.catch((error) =>
			res.status(404).json({
				success: false,
				error: error.message,
			})
		);
});

/**************************** PUT ****************************/
//     if(!req.body) return res.sendStatus(400);
/*************************************************************/

module.exports = router;
