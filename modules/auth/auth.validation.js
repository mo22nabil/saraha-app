const joi = require("joi");

const signUpValidator = {
    body:joi.object().required().keys({
        name:joi.string().pattern(RegExp(/[A-Z][a-zA-Z][^#&<>\~;$^%{}?]{1,20}$/)).required().messages({
            'string.empty':"plz fill your name",
            'string.base':"plz type string",
            'any.required':"plz send your name",
            'string.pattern.base':"plz send string only"
        }),
        email:joi.string().email().required(),
        password:joi.string().pattern(RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')).required(),
        cpassword:joi.valid(joi.ref('password')).required(),
        
    }),
    params:joi.object().required().keys({
        id:joi.boolean()
    })
}
const signInValidator = {
    body:joi.object().required().keys({
        email:joi.string().email().required(),
        password:joi.string().pattern(RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')).required(),
    })
}

module.exports ={
    signUpValidator,
    signInValidator
}