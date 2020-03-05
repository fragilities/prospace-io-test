const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler.js')

mongoose.connect(`mongodb://localhost:27017/prospace-${process.NODE_ENV}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongodb'))
    .catch(() => console.log('Connection to mongodb has failed'))

app.listen(port, () => console.log(`Express server is listening on port ${port}`))

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', routes)
app.use(errorHandler)