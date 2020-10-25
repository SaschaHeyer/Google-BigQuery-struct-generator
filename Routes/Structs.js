const express = require("express");
const router = express.Router();

const structsController = require("../Controllers/StructsController");


router.get(
  "/",
  structsController.generateStructs
);

module.exports = router;