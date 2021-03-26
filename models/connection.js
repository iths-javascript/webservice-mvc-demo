const sqlite = require('sqlite3')

const db = new sqlite.Database('albums.db')

module.exports = db