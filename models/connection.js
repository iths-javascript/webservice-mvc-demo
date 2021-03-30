const sqlite = require('sqlite3')

const db = new sqlite.Database('database/albums.db')

module.exports = db