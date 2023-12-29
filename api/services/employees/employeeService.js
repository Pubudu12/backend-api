const {
    resErrorHandlerService,
    resSuccessHandlerService,
  } = require("../general/responseService.js");
const employeeController = require("../../controllers/employees/employeeController");
const jwt = require("jsonwebtoken");
  
// Fetch all employees
const getEmployees = async (req, res) => {
    

    try {
        return await employeeController
        .getAllEmployees()
        .then((response) => {
            // console.log("Success response : ", response);
            return resSuccessHandlerService(
                res,
                "Employee details Fetched successfully !!",
                response
            );
        })
        .catch((error) => {
            return resErrorHandlerService(
            res,
            "Employee details fetch failed!",
            error
            );
        });
        
    } catch (error) {
        console.log('Emp service error')
        return resErrorHandlerService(
            res,
            "Note details adding failed! Catch",
            error
        );        
    }
};


// fetch single Employee
const getSingleEmployeeData = async (req, res) => {
    
    const empId = req.params.empId

    try {
        return await employeeController
        .getSingleEmployee(empId)
        .then((response) => {
            // console.log("Success response : ", response);
            return resSuccessHandlerService(
                res,
                "Employee details Fetched successfully !!",
                response
            );
        })
        .catch((error) => {
            return resErrorHandlerService(
            res,
            "Employee details fetch failed!",
            error
            );
        });
        
    } catch (error) {
        console.log('Emp service error')
        return resErrorHandlerService(
            res,
            "Note details adding failed! Catch",
            error
        );        
    }
};
 
// Add new employees into DB
const addEmployee = async (req, res) => {
    const data = req.body;
    try {
        return await employeeController
        .addEmployee(data)
        .then((response) => {
            // console.log("Success response : ", response);
            return resSuccessHandlerService(
                res,
                "Employee added successfully !!",
                response
            );
        })
        .catch((error) => {
            return resErrorHandlerService(
            res,
            "Employee add failed!",
            error
            );
        });
        
    } catch (error) {
        console.log('Emp service error')
        return resErrorHandlerService(
            res,
            "Note details adding failed! Catch",
            error
        );        
    }
};

const login = async (req, res) => {
    const user = {
        id: 1,
        username : 'jane',
        email: 'jane532@gmail.com'
    }

    jwt.sign({user}, process.env.USER_TOKEN_KEY, (err, token) => {
        res.json({
            token
        })
    })
}

// Update an existing employee
const updateEmployee = async (req, res) => {
    const data = req.body
    const empId = req.params.empId

    console.log('empl   :: ',empId)
    
    try {
        return await employeeController
        .updateEmployee(data, empId)
        .then((response) => {
            // console.log("Success response : ", response);
            return resSuccessHandlerService(
                res,
                "Employee details updated successfully !!",
                response
            );
        })
        .catch((error) => {
            return resErrorHandlerService(
            res,
            "Employee details update failed!",
            error
            );
        });
        
    } catch (error) {
        console.log('Emp update service error')
        return resErrorHandlerService(
            res,
            "Error in catch : Employee update failed",
            error
        );        
    }
};

// delete an existing employee
const deleteEmployee = async (req, res) => {
    
    try {
        return await employeeController
        .deleteEmployee(req.params.empId)
        .then((response) => {
            // console.log("Success response : ", response);
            return resSuccessHandlerService(
                res,
                "Employee deleted successfully !!",
                response
            );
        })
        .catch((error) => {
            return resErrorHandlerService(
            res,
            "Employee delete failed!",
            error
            );
        });
        
    } catch (error) {
        return resErrorHandlerService(
            res,
            "Error in Catch : Employee delete failed",
            error
        );        
    }
};

module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getSingleEmployeeData
}