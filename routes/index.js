const express = require('express')
const router = express.Router()
const AlbumsController = require('../controllers/AlbumController')

router.get('/albums', AlbumsController.listAlbums )
router.post('/albums', AlbumsController.createAlbum )

module.exports = router
