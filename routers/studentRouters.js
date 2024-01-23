const express = require("express")
const router = express.Router()
const upload = require("../utils/multer")
const {homepage, signUp} = require("../conrollers/studentsController")


router.get("/homepage", homepage)
router.post("/signUp",upload.array("photos", 5),signUp)


module.exports = router