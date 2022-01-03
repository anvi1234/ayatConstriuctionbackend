const express =  require("express");
const router = express.Router();
const jwtHelper = require('../../config/jwtHelper');

const ctrlUser = require('../../controller/user.controller');
router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/cngSite',jwtHelper.verifyJwtToken,ctrlUser.cngSite)
module.exports = router;