const Company = require('../models/Company');

class CompanyController {
    static async create(req, res, next) {
        try {
            res.status(201).json(await Company.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    static async read(req, res, next) {
        try {
            res.status(200).json({ companies: await Company.find() });
        } catch (error) {
            next(error);
        }
    }

    static async readOne(req, res, next) {
        try {
            res.status(200).json({
                company: await Company.findById(req.params.id)
            });
        } catch (error) {
            next(error);
        }
    }

    static async updateOne(req, res, next) {
        try {
            res.status(200).json({
                company: await Company.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                        runValidators: true
                    }
                )
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteOne(req, res, next) {
        try {
            res.status(200).json({
                company: await Company.findByIdAndDelete(req.params.id)
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CompanyController;
