const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp2');
const Schema = mongoose.Schema;
const models = mongoose.models;

const companySchema = new Schema({
	name: {
		type: String,
		required: [ true, 'Must insert company name' ]
	},
	address: {
		type: String,
		required: [ true, 'Must insert address' ]
	},
	revenue: {
		type: Number,
		required: [ true, 'Must insert revenue' ]
	},
	phone: {
		type: String,
		required: [ true, 'Must insert phone number' ]
	},

	offices: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Office'
		}
	]
});

companySchema.plugin(timestamp);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
