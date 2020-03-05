const Office = require('../models/Office');

class OfficeController {
	static async create(req, res, next) {
		try {
			res.status(201).json(await Office.create(req.body));
		} catch (error) {
			next(error);
		}
	}

	static async read(req, res, next) {
		try {
			res.status(200).json({ offices: await Office.find({ company: req.body.companyId }) });
		} catch (error) {
			next(error);
		}
	}

	static async readOne(req, res, next) {
		try {
			res.status(200).json({ office: await Office.find({ _id: req.params.id }) });
		} catch (error) {
			next(error);
		}
	}

	static async updateOne(req, res, next) {
		try {
			res.status(200).json({
				office: await Office.findByIdAndUpdate(req.params.id, req.body, {
					new: true,
					runValidators: true
				})
			});
		} catch (error) {
			next(error);
		}
	}

	static async deleteOne(req, res, next) {
		try {
			res.status(200).json({ office: await Office.findByIdAndDelete(req.params.id) });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = OfficeController;
