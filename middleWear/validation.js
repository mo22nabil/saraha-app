
const dataMethod = ['body','params','query']
const validation = (schema)=>{
    return (req,res,next)=>{
        const validResArr =[]
        dataMethod.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key],{abortEarly:false});
                if (validationResult.error) {
                    validResArr.push(validationResult.error.message)
                    
                }
            }
        });
        if (validResArr.length ) {
            
                res.json({message:"validation error", err:validResArr})
        } else {
                next()
            
        }
    
    }
}

module.exports = validation