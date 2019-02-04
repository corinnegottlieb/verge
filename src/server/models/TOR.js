const mongoose = require('mongoose')
const Schema = mongoose.Schema

const torSchema = new Schema({
    userID: Number,
    name: String,
    children: Array,
    level: Number,
    url: String,
    relevance: Boolean,
    tracked: Boolean,
    checked: Boolean,
    note: String,

})

const TOR = mongoose.model(`Tor`, torSchema)



module.exports = TOR


