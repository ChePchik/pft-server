require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const app = express();
const users = require("./server/routes/api/users");
const auth = require("./server/routes/api/auth");
const test = require("./server/routes/api/test");
const data = require("./server/routes/api/group");
const port = process.env.PORT || 3001;
const MONGODB_URL = process.env.DATABASE_URL;
=======
const path = require("path");
const app = express();

const users = require("./server/routes/api/users");
const data = require("./server/routes/api/group");
const auth = require("./server/routes/api/auth");
const test = require("./server/routes/api/test");

const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.DATABASE_URL;

>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "PFT server API",
			version: "1.0.0",
		},
	},
	apis: ["./server/routes/api/*.js"], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(options);

// Connect to MongoDB
mongoose
<<<<<<< HEAD
	.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
=======
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
	.then(() =>
		console.log("\x1b[33m%s\x1b[0m", "MongoDB successfully connected")
	)
	.catch((err) => console.log(err));
//ДОБАВИТЬ ЛОГИРОВАНИЕ

// Routes
<<<<<<< HEAD
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //
=======
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
app.use("/api/auth", auth);
app.use("/api/group", data);
app.use("/api/users", users);
app.use("/api/test", test);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }

//Go the SERVERs
app.listen(port, () => {
	console.log("\x1b[35m%s\x1b[0m", `The server is running on the port ${port}`);
	console.log("\x1b[32m%s\x1b[0m", `http://localhost:${port}/`);
});
