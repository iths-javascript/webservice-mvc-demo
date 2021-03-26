const Album = require('../models/Album')

const listAlbums = async (req,res) => {
  const albums = await Album.listAlbums(10, 0)
  res.json({albums})  
}

module.exports = {listAlbums}