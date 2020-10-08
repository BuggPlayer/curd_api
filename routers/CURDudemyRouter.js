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
router.route("/").get(getAllData);
router.route("/createdata").post(CreateData);
router.route("/:id").get(getSingleData);
router.route("/:id/updatedata").put(Updatedata);
router.route("/:id/deletedata").delete(DeleteData);

// photo upload route
router.route("/:id/photo").put(photoupload);
module.exports = router;
