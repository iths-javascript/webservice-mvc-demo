const express = require('express')
const app = express()
const Logger = require('./middleware/Logger')
const AlbumRoutes = require('./routes/index.js')
const ErrorHandler = require('./errors/handler')

app.use( express.json() )
app.use( Logger )

app.use( '/api/v1', AlbumRoutes )
app.use(ErrorHandler)

app.listen(8080, () => console.log("It's running birch"))