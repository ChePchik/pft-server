require('dotenv').config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const keys = process.env.secretOrKey;
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

/**************************** GET ****************************/
/**************************** POST ****************************/
/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 *  *  * ? jnduede
 * ! efkeef
 * TODO dendnek
 */
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Адрес электронной почты уже существует" });
        } else {
            const newUser = new User({
                id: req.body.id,
                email: req.body.email,
                name: req.body.name,
                surname: req.body.surname,
                thirdname: req.body.thirdname,
                group: req.body.group,
                password: req.body.password,
                role: req.body.role,
                date: req.body.date
            });

            // Хешировать пароль перед сохранением в базе данных
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});
/**
 * @route POST api/users/login
 * @desc Login user and return JWT token
 * @access Public
 */
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    const {
        email,
        password
    } = req.body;

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: "Email не найден" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                // Соответствует пользователю
                // Создание полезной нагрузки JWT
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys, {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ error: "пароль неверный" });
            }
        });
    });
});
/**************************** DELETE ****************************/
// app.delete("/api/:id/del", function(req, res) { // удаление пользователя по id
//     var id = req.params.id;

// });

/**************************** PUT ****************************/
//     if(!req.body) return res.sendStatus(400);
/*************************************************************/


module.exports = router;