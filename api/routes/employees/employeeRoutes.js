const express = require("express");
const router = express.Router();
const employeeService = require("../../services/employees/employeeService");
const endpointAuthentication = require("../../../auth/endpointAuthentication");

module.exports = () => {

    router.get("/", endpointAuthentication, employeeService.getEmployees); 

    router.post("/", endpointAuthentication, employeeService.addEmployee); 

    // router.post("/login", employeeService.login);  

    router.put("/:empId?", endpointAuthentication, employeeService.updateEmployee); 

    router.delete("/:empId?", endpointAuthentication, employeeService.deleteEmployee); 

    return router;
};
