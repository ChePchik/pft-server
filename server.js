require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const users = require('./server/routes/api/users');
const data = require('./server/routes/api/group');
const auth = require('./server/routes/api/auth');

const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.DATABASE_URL;
require('dotenv').config();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('\x1b[33m%s\x1b[0m', "MongoDB successfully connected"))
    .catch((err) => console.log(err));
//ДОБАВИТЬ ЛОГИРОВАНИЕ


// Routes
app.use('/api/auth', auth);
app.use('/api/group', data);
app.use('/api/users', users);


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }

//Go the SERVERs
app.listen(port, () => {
    console.log('\x1b[35m%s\x1b[0m', `The server is running on the port ${port}`)
    console.log('\x1b[32m%s\x1b[0m', `http://localhost:${port}/`)
});