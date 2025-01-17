const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { upload, uploadToFirebase } = require("../middlewares/file.middleware");

// Create a new product (POST)
router.post("", upload, uploadToFirebase, productController.createProduct);

// Get all products (GET)
router.get("", productController.getProducts);

// Get a single product by ID (GET)
router.get("/:id", productController.getProductById);

// Delete a product by ID (DELETE)
router.delete("/:id", productController.deleteProduct);

// Update a product by ID (PUT)
router.put("/:id", upload, uploadToFirebase, productController.updateProduct);

module.exports = router;
