let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() }
})

module.exports = mongoose.model('List', schema)