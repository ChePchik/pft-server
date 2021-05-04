require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const app = express();
const users = require("./server/routes/api/users");
const auth = require("./server/routes/api/auth");
const test = require("./server/routes/api/test");
const data = require("./server/routes/api/group");
// const SwaggegDoc = require("./SwaggegDoc.json");
const port = process.env.PORT || 3001;
const MONGODB_URL = process.env.DATABASE_URL;
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
		// ...SwaggegDoc,
	},
	apis: ["./server/routes/api/*.js"], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(options);

// Connect to MongoDB
mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		console.log("\x1b[33m%s\x1b[0m", "MongoDB successfully connected")
	)
	.catch((err) => console.log(err));
//ДОБАВИТЬ ЛОГИРОВАНИЕ

// Routes
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //
// const parser = new SwaggerParser();
// const apiDescription = parser.validate(SwaggegDoc);
// swaggerRoutes(users, apiDescription);
// connect(app);

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
