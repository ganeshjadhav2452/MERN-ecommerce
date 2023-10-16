import express from "express";
import { verifyAdmin, verifyUser } from "../middlewares/authMiddleware.js";
import { createProductController, getProductsController, getSingleProductController, productPhotoController, deleteProductController, updateProductController } from "../controllers/productControllers.js";
import formidable from "express-formidable";
const router = express.Router();

// create product

router.post(
    "/create-product",
    verifyUser,
    verifyAdmin,
    formidable(),
    createProductController
);

//update product
router.put(
    "/update-product/:pid",
    verifyUser,
    verifyAdmin,
    formidable(),
    updateProductController
);

// get products

router.get('/get-products', getProductsController)

// get single product
router.get('/get-product/:slug', getSingleProductController)

// get product photo
router.get('/product-photo/:pid', productPhotoController)

// delete product

router.delete('/delete-product/:id', verifyUser, verifyAdmin, deleteProductController)
export default router;
