const x=10


const validation = (schema, args) => {

    const { value, error } = schema.validate(args, { abortEarly: false })
    return { value, error } 
}


module.exports = {
    validation,x
}