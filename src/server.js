const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require(`./server/routes/api`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//this needs to be changed before deployment:
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/VergeDB")
// mongoose.connect('mongodb://localhost:27017/VergeDB', {useNewUrlParser: true})


app.use('/', api)
// app.get(`/sanity`, function(req, res) {
//     console.log(`you are sane`)
//     res.end()
// })

const port = 8000
app.listen(port, function () {
    console.log(`server running on port ${port}`)
})