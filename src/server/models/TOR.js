const mongoose = require('mongoose')
const Schema = mongoose.Schema

const torSchema = new Schema({
    // userID: Number,
    // value: {
    //     name: String,
    //     url: String,
    //     relevance: Boolean,
    //     tracked: Boolean,
    //     checked: Boolean,
    //     note: String,
    // },
    name: String,
    children: Array
})

const TOR = mongoose.model(`TOR`, torSchema)



module.exports = TOR;


