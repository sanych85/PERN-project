const {Type} = require('../models/models')
const ApiError = require('../error/apiError')
const createTypes = async(req,res)=> {
    console.log('in create new type')
    console.log('req.bode', req.body)
    const {name} =req.body
    const type = await Type.create({name})
    console.log(type, "type")
    return res.json({type})
}

const getAllTypes = async(req,res)=> {
    const types = await Type.findAll()
   
    res.send(types)
}


module.exports = {createTypes, getAllTypes}
