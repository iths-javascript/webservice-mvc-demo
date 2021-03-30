const sqlite = require('sqlite3')
const db = new sqlite.Database("database/albums.db")

const albums = [
  {Title: "Album 1"},
  {Title: "Album 2"},
  {Title: "Album 3"},
  {Title: "Album 4"},
  {Title: "Album 5"},
  {Title: "Album 6"},
]

db.run("INSERT INTO albums(Title) VALUES (?),(?),(?),(?),(?),(?)", albums.map(album => album.Title))