const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Преобразуем пустые поля в пустую строку, чтобы мы могли использовать функции валидатора
    data.name = !isEmpty(data.name) ? data.name : "";
    data.surname = !isEmpty(data.surname) ? data.surname : "";
    data.thirdname = !isEmpty(data.thirdname) ? data.thirdname : "";
    data.group = !isEmpty(data.group) ? data.group : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Обязательно введите Имя";
    }
    // surname checks
    if (Validator.isEmpty(data.surname)) {
        errors.surname = "Обязательно введите Фамилию";
    }
    // Name checks
    if (Validator.isEmpty(data.thirdname)) {
        errors.thirdname = "Обязательно введите Отчество";
    }
    // group checks
    if (Validator.isEmpty(data.group)) {
        errors.group = "Обязательно введите Группу";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Обязательно введите  Email";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Обязательно введите пароль";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Поле для подтверждения пароля обязательно";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Пароль должен состоять не менее чем из 6 символов.";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Пароли должны совпадать";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};