

const successReturnHandler = (message = null, data = null, options=null) =>{

    let responseArray = {result:true};

    if(message == null){
        message = "Success"
    }
    responseArray.message = message;
    responseArray.status = true;

    if(data != null){
        responseArray = data;
    }
    if(options != null){
        responseArray.options = options;
    }

    return responseArray;

}

const errorReturnHandler = (message = null, error = null, data = null)=>{

    let responseArray = {result: false};

    if(message == null){
        message = "Failed in action - Error Handler"
    }
    responseArray.message = message;
    responseArray.status = false;
    if(error != null){
        responseArray.error = error;
    }

    if(data != null){
        responseArray.data = data;
    }

    return responseArray;
} //resErrorHandler

// Exports
module.exports = {
    successReturnHandler,
    errorReturnHandler
}