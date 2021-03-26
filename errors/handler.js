const errorHandler = (error, req, res, next) => {
  res.json({message: 'We done goofed', error: error.message})
}

module.exports = errorHandler