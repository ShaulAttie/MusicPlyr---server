const express = require("express");
const router = express.Router();

const searchRouter = require("./searchRoute");
const userRouter = require("./userRoute");
const playlistRouter = require("./playlistRoute");

router.use("/search", searchRouter);
router.use("/user", userRouter);
router.use("/playlists", playlistRouter);


module.exports = router;
