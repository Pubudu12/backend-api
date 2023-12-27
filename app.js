const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
const http = require("http");

const server = http.createServer(app); // Add this


//port initialize
const PORT = process.env.PORT || 8080;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const allRoutesModule = require("./api/routes");
const allRoutes = allRoutesModule.allRoutes;

const allEmployeeRouteModule = require("./api/routes/employees");
const allEmployeeRoutes = allEmployeeRouteModule.allEmployeeRoutes;


allRoutes.map((routeObj) => {
    app.use(`${routeObj.startPath}`, routeObj.file());
});

allEmployeeRoutes.map((routeObj) => {
    app.use(`${routeObj.startPath}`, routeObj.file());
});


// Authenticated Database Connection
require("./sequelize/authenticate");


//server start
server.listen(PORT, () => {
  console.log("Server is up and running at port -----", PORT);
});
