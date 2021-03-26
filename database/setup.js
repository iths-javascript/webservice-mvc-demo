const sqlite = require('sqlite3')
const db = new sqlite.Database('database/albums.db')

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS albums")
  db.run(`CREATE TABLE "albums" (
    "id"	INTEGER,
    "Title"	TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
  );`)
})