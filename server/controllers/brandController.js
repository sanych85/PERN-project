const {Brand} = require('../models/models')
const createBrand = async (req,res)=> {
    const {name} =req.body
    console.log(name, "name")
    const brand = await Brand.create({name})
    return res.json({brand})
}

const getAllBrands = async (req,res)=> {
    const brands = await Brand.findAll()
    return res.send(brands)
}


module.exports = {createBrand, getAllBrands}