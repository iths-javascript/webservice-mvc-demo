const Album = require('../models/Album')

const listAlbums = async (req, res, next) => {
  try{
    const albums = await Album.listAlbums(10, 0)
    res.json({albums})  
  }catch(error){
    next(error)
  }
}

module.exports = {listAlbums}