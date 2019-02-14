const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
    name: String,
    url: String,
    level: Number,
    relevance: Boolean,
    tracked: Boolean,
    checked: Boolean,
    note: String,
    renderNote: Boolean,
    renderMenu: Boolean,
    root: String,
    children: [String]
    // children: [{type: Schema.Types.ObjectId, ref: 'Topic'}]
})

const Topic = mongoose.model(`Topic`, topicSchema)

module.exports = Topic;