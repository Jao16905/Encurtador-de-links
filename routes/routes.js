const express = require("express");
const router = express.Router();
const linkControler = require("../controlers/controlers");

router.post("/api/add", express.json() ,linkControler.createLink);
router.get("/:args", linkControler.redirect);

module.exports = router