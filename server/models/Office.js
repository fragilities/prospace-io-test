const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const Schema = mongoose.Schema
const models = mongoose.models

const officeSchema = new Schema({})

officeSchema.plugin(timestamp)

const Office = mongoose.model('Office', officeSchema)

module.exports = Office