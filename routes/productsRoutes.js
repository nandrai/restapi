const express = require("express");
const {
  getProducts,
  getTestProducts,
  addProduct,
  removeProduct,
} = require("../controllers/productControllers");

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:id").delete(removeProduct);
router.route("/testing").get(getTestProducts);

module.exports = router;
