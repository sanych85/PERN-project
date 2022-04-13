const {Brand} = require('../models/models')
const createBrand = async (req,res)=> {
    const {name} =req.body
   
    const brand = await Brand.create({name})
    return res.json({brand})
}

const getAllBrands = async (req,res)=> {
    const brands = await Brand.findAll()
    return res.json({brands})
}


module.exports = {createBrand, getAllBrands}