const jwt = require('jsonwebtoken')
module.exports = function(req,res, next) {
    console.log(req.headers.authorization.split(' ')[1])
    if(req.method === 'options') {
        next()
    }
    try {
      

        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            res.status(401).json({message:"unauthorized"})
        }
  
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded;
        next()
    }
    catch(err) {
     
        res.status(401).json({message: "user is unauthorized"})
    }
}