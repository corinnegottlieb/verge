const mongoose = require('mongoose')
const Schema = mongoose.Schema

const treeSchema = new Schema({
    name: String
})

const Tree = mongoose.model(`Tree`, treeSchema)

module.exports = Tree;