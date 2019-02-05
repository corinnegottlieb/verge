const mongoose = require('mongoose')
const Schema = mongoose.Schema

const torSchema = new Schema({
    name: String,
    children: Array
})

const TOR = mongoose.model(`TOR`, torSchema)



module.exports = TOR;


