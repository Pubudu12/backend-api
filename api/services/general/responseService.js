const resSuccessHandlerService = (
    res,
    message = null,
    data = null,
    options = null
  ) => {
    let responseArray = {};
    let statusCode = 200;
  
    if (message == null) {
      message = "Success";
    }
  
    responseArray.message = message;
  
    if (data != null) {
      if (data.message != null) {
        message = data.message;
        delete data.message;
      }
  
      if (data.result != null) {
        if (data.result == false) {
          statusCode = 400;
        }
  
        delete data.result;
      }
  
      if (data.status != null) {
        responseArray.status = data.status;
        delete data.status;
      } else {
        responseArray.status = true;
      }
  
      responseArray.message = message;
      responseArray.data = data;
    }
    if (options != null) {
      responseArray.options = options;
    }
  
    //    console.log('responseArray', responseArray)
    // console.log( res , message , data, statusCode )
    return res.status(statusCode).json(responseArray);
  };
  
  const resErrorHandlerService = (
    res,
    message = null,
    error = null,
    statusCode = 400
  ) => {
    let responseArray = {};
  
    if (message == null) {
      message = "Failed in action - Error Handler";
    }
    if (error.message != null) {
      message = error.message;
      delete error.message;
    }
  
    if (error.status != null) {
      responseArray.status = data.status;
      delete data.status;
    } else {
      responseArray.status = false;
    }
  
    responseArray.message = message;
  
    if (error.result != null) {
      delete error.result;
    }
  
    if (error != null) {
      responseArray.error = error;
    }
  
    // console.log( res , message , error, statusCode )
    return res.status(statusCode).json(responseArray);
}; //resErrorHandler
  


// Exports
module.exports = {
    resErrorHandlerService,
    resSuccessHandlerService,
};
  