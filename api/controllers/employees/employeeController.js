require("../../../sequelize");
const { Op } = require("sequelize");
const { employee } = sequelize.models;

const employeesModel = employee;
const Sequelize = require('sequelize')

const { successReturnHandler, errorReturnHandler } = require("../general/responseHandler")


// fetch all employees
const getAllEmployees = async () => {
    
    try {

      const employeeList = await employeesModel.findAll({
        attributes: [
          'first_name',
          'last_name',
          'phone_number',
          'email',
          'gender',
          'photo'
        ]
      });  
      
      
      return successReturnHandler("Employee details fetched successfully", employeeList)
      
    } catch (error) {
      return errorReturnHandler("Error : Employee details fetch failed!", error);      
    }
};


// save new employee into DB
const addEmployee = async (data) => {
    
  try {

    let employeeData = {
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone,
      email: data.email,
      gender: data.gender,
      photo: data.photo
    } 

    return await employeesModel
    .create(employeeData)
    .then(async (successData) => {   	
        console.log('successData ',successData)		
        return successReturnHandler( 
            "Employee added successfully",
            successData
        );
    })
    .catch((error) => {
        console.log('New employee adding falied!')
        return errorReturnHandler("New employee adding falied!", error);
    });
    
  } catch (error) {
    return errorReturnHandler("Error : Error in catch!", error);      
  }
};


// update existing employee 
const updateEmployee = async (data, employee_id) => {
    
  try {

    const isEmployeeExist = await employeesModel.findOne({
        where: {
            id: employee_id,
        },
    });

    if (isEmployeeExist) {        

        let empUpdateData = {
            first_name: data?.first_name,
            last_name: data?.last_name,
            phone: data?.phone,
            email: data?.email,
            gender: data?.gender,
            photo: data?.photo,
        };

        return await employeesModel
            .update(empUpdateData, {
                where: {
                    id: employee_id,
                },
            })
            .then(async (successData) => {             
                return successReturnHandler( 
                    "Employee updated successfully",
                    successData
                );
            })
            .catch((error) => {
                return errorReturnHandler("Employee update failed", error);
            });      
    } else {
        return errorReturnHandler("Error : This emoloyee is not existing!");
    }
    
  } catch (error) {
    return errorReturnHandler("Error in Catch : Employee update failed!", error);      
  }
};

// delete employee
const deleteEmployee = async (employee_id) => {
    
  try {

    const isEmployeeExist = await employeesModel.findOne({
        where: {
            id: employee_id,
        },
    });

    if (isEmployeeExist) { 
        return await isEmployeeExist.destroy()
        .then(async (successData) => {             
            return successReturnHandler( 
                "Employee deleted successfully",
                successData
            );
        })
        .catch((catchError) => {
            return errorReturnHandler("Employee delete failed", catchError);
        }); 
    }else{
        return errorReturnHandler("Error : This emoloyee is not existing!");
    }
    
  } catch (error) {
    return errorReturnHandler("Error : Employee details delete failed!", error);      
  }
};

// Exports
module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
};