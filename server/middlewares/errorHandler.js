function errorHandler(err, req, res, next) {
    const errorCode = err.errorCode || 500;
    const messages = [];

    if (JSON.stringify(err).includes('ValidationError')) {
        for (let field in err.errors) {
            messages.push({ [field]: err.errors[field].message });
        }
    } else if (JSON.stringify(err).includes('CastError')) {
        messages.push({
            CastError: 'Invalid id'
        });
    } else {
        messages.push(err.message);
    }

    res.status(errorCode).json({ messages });
}

module.exports = errorHandler;
