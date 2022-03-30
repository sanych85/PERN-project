const {Type} = require('../models/models')
const ApiError = require('../error/apiError')
const createTypes = async(req,res)=> {
    const {name} =req.body
    const type = await Type.create({name})
    return res.json({type})
}

const getAllTypes = async(req,res)=> {

}


module.exports = {createTypes, getAllTypes}
