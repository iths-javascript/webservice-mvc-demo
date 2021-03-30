const MY_CONSTANT = 1000
const MY_CONSTANT_CONSTANT = MY_CONSTANT + 100

const Logger = (req,res,next) => {
  console.log(`${new Date(} - ${req.method} - ${req.path}`)
  next()
}

module.exports = Logger