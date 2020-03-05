function errorHandler(err, req, res, next) {
    console.log(err)

    const errorCode = err.errorCode || 500
    const messages = []

    if(err.message) messages.push(err.message)

    res.status(errorCode).json({messages})
}

module.exports = errorHandler