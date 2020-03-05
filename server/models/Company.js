const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp2')
const Schema = mongoose.Schema
const models = mongoose.models

const companySchema = new Schema({})

companySchema.plugin(timestamp)

const Company = mongoose.model('Company', companySchema)

module.exports = Company