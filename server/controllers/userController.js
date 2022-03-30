const ApiError = require("../error/ApiError")

const registration = async (req,res)=> {
    console.log('in regi')
    res.send('registration')
}

const login = async (req,res)=> {

}

const check = async (req,res, next)=> {
    console.log("in check")
    const {id} =req.query
    console.log(id,"id")
    if(!id) {
        return next(ApiError.badRequest('There is no id',"cccccccccccc"))
    }
   
    res.json({id})
}

module.exports = {registration, login, check}