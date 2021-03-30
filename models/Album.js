const db = require('./connection.js')

function listAlbums(pageSize=10, page=0){
  return new Promise( (resolve, reject) => {
    const offset = page*pageSize
    db.all("SELECT * FROM albums LIMIT ?, ?", [offset, pageSize], function(error, rows){
      if(error){
        reject(error)
      }else{
        resolve(rows)
      }
    })
  })
}

module.exports = {listAlbums}