const express = require("express");

const {
  getAllData,
  getSingleData,
  CreateData,
  Updatedata,
  DeleteData,
  photoupload,
} = require("../controler/Curdudemy");

const router = express.Router();
router.route("/").get(getAllData).post(CreateData);
router.route("/:id").get(getSingleData).put(Updatedata).delete(DeleteData);

// photo upload route
router.route("/:id/photo").put(photoupload);
module.exports = router;
