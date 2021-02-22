# pft-server
# PLATFORM FOR TEST
**Платформа для создания тестов**

Проект тестирования на вопросы
состоит из сервера и клиенткой части

---
* ``npm i``
* ``npm start`` or ``npm run server``- run api server/nodemon
* ``npm run dev`` - development client
* go to ```htttp://localhost:3001```
* PROFTI

---
## Технологии
* Exspress
* Mongoose
---

### Сделать

* Переписать все стили х_х
* Переписать getdescription в Readme
* Провести рефакторинг
* Расставить коментарии
* Добавить полной автономности проекту, без импортируемых библиотек
* Better Comments
 ---

### Register
``
curl --location --request POST 'http://localhost:3000/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":2,
    "name":"test@test.ru",
    "email": "test@test.ru",
    "password": "test@test.ru",
    "password2": "test@test.ru",
    "role":"user"
}'
``

---
### login

``
curl --location --request POST 'http://localhost:3000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.ru",
    "password": "test@test.ru"
}'
``