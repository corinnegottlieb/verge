const mongoose = require('mongoose')
const Schema = mongoose.Schema

const torSchema = new Schema({
    userID: Number,
    value: {
        name: String,
        url: String,
        relevance: Boolean,
        tracked: Boolean,
        checked: Boolean,
        note: String,
    },
    children: Array

})

const TOR = mongoose.model(`Tor`, torSchema)



module.exports = TOR


