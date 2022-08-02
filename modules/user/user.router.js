const { auth } = require('../../middleWear/auth');
const {myMulter, multerValidator, multerPath} = require('../../services/multer');
const {viewprofile, messageList, updateProfilePic, updatecoverPic, updatephone} = require('./controller/profile');
const endpoint = require('./user.endpoint');

const router = require('express').Router()


router.get('/user/profile',auth(endpoint.profile),viewprofile)
router.get('/user/message',auth(endpoint.profileMessages),messageList)
router.patch('/user/profile/pic',auth(endpoint.profileUpdatePic),myMulter(multerPath.profilePic,multerValidator.image).single('image'),updateProfilePic)
router.patch('/user/profile/cover',auth(endpoint.profileUpdatePic),myMulter(multerPath.coverPic,multerValidator.image).array('image',5),updatecoverPic)
router.patch('/user/phone',auth(endpoint.profile),updatephone)


module.exports=router;