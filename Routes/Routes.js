const express = require("express");
const {SignUp,getAll} = require("../controller/control");
const router = express.Router();


router.post("/",SignUp);
router.post("/getall",getAll);

module.exports = router;
