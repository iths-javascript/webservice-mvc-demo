const Logger = (req,res,next) => {
  console.log(`${new Date(Date.now())} - ${req.method} - ${req.path}`)
  next()
}

module.exports = Logger