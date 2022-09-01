const express = require("express")
const router = express.Router()


const playlistController = require("../DL/controller/playlistController")

const {auth} = require("../middleware/auth")

router.post("/", auth, playlistController.create)
router.get("/creator/:pid", auth, playlistController.readByCreator)

router.get("/:_id", auth, playlistController.read)

router.patch("/:_id", auth, playlistController.update)

router.delete('/:_id', auth, playlistController.del)


module.exports = router