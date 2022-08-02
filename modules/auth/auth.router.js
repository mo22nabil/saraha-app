const validation = require('../../middleWear/validation');
const userValidator = require('./auth.validation');
const signin = require('./controller/signin');
const signup = require('./controller/signup');

const router = require('express').Router()

router.post('/signup',validation(userValidator.signUpValidator),signup)
router.post('/signin',validation(userValidator.signInValidator),signin)




module.exports=router;