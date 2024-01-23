const database = require("../models/studentsModel")

exports.homepage = async(req, res)=>{
    res.send("hello world")
}

exports.signUp = async(req, res)=>{
    try {
        const {name, department, photos}= req.body
        const file = req.files
        const userProfile = await database.create({
            name,
            department,
            photos: file.map(file=>file.filename)
        })
        if (!userProfile) {
            res.status(400).json({
                message:" Unable to create userProfile "
            })
        }else{
            res.status(200).json({
                data: userProfile
            })
        }
    } catch (error) {
        res.json(error.message)
    }
}