require('dotenv').config()
const sequelize = require('./db');
const express = require('express')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000
const app = express()
const errorHandler = require('./middleware/errorHandlingMiddleware')

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const start  = async()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server starts on ${PORT}`))
    }
    catch(err) {
        console.log(err)
    }
}

start()