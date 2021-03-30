const errorHandler = (error, req, res, next) => {
  console.error(`${new Date()} - ${error.message}`)
  res.json({message: 'We done goofed', error: error.message})
}

module.exports = errorHandler