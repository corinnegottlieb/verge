const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
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

const Topic = mongoose.model(`Topic`, topicSchema)



module.exports = Topic

let samurai = new Topic( {
    value: {
        name: "Samurais",
        link: "https://en.wikipedia.org/wiki/Samurai"
    },
    children: ["History", "Philosophy", "Arts", "Culture", "Women", "Foreign samurai", "Weapons", "Armour", "Weapons", "Myth and reality", "In popular culture", "Famous samurai"]
})

