const express = require("express");
const router = express.Router();

const { cors } = require("../middleware/cors")

const searchController = require("../DL/controller/searchController")

router.get("/:params", cors, searchController.read)

module.exports = router;
