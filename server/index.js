require('dotenv').config()
const sequelize = require('./db');
const express = require('express')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()
const errorHandler = require('./middleware/errorHandlingMiddleware')
const fileUpload = require('express-fileupload')

app.use(cors())
app.use(express.json())

//execute static image
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

const start  = async()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server starts on ${PORT}`))
    }
    catch(err) {
    
    }
}

start()