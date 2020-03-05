const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp2');
const Schema = mongoose.Schema;
const models = mongoose.models;

const officeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Must insert office name']
    },
    location: {
        type: String,
        required: [true, 'Must insert office location']
    },
    startDate: {
        type: Date,
        required: [true, 'Must insert office start date']
    },
    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: [true, 'Must specify the company'],
        validate: {
            validator: v => {
                return models.Company.findById(v);
            },
            message: props => 'Company with such id does not exist'
        }
    }
});

officeSchema.plugin(timestamp);

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;
