const express = require("express");
const postsController = require("../controllers/dataController");
const paginationMiddleware = require("../middleware/pagination");
const router = express.Router();

// define routes
router.get("/api/posts", [paginationMiddleware], postsController.getPosts);

module.exports = router;
