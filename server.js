if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
app.set("view engine", 'ejs')
app.set('views','./views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log("connected to Monpm i --save-dev dotenvngoose"))
app.use('/', indexRouter)
app.listen(process.env.PORT || 4000)