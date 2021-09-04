require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const userRouter = require('./router/user')
const connectDB = require('./config/database')
connectDB()

// middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(morgan('dev'))

app.use('/script', express.static(__dirname + '/script'))

app.use('/user', userRouter)

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))