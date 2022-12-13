const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes')
require('dotenv').config();


const connectDB = require('./config/database')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '200mb' }))
app.use(cors())


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('login', {})
})

app.get('/register', (req, res) => {
    res.render('register', {})
})

//Connect
connectDB()



//Route
app.use('/api', router)

const port = process.env.PORT
app.listen(port, () => {
    console.log('Server on Port', port)
})