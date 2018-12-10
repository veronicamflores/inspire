let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    listId: { type: ObjectId, ref: "List", required: true },
    created: { type: Number, required: true, default: Date.now() }
})

module.exports = mongoose.model('Task', schema)