import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller";
import { deleteProductController } from "../controllers/products/deleteProduct.controller";
import { listProductsController } from "../controllers/products/listProducts.controller";
import { readCategorysProductsController } from "../controllers/products/readCategorysProducts.controller";
import { readProductController } from "../controllers/products/readProduct.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import { idCategoryVerification } from "../middlewares/idCategoryVerification";
import { idProductVerification } from "../middlewares/idProductVerification";

export const productsRoutes = Router();

productsRoutes.post("", createProductController);
productsRoutes.get("", listProductsController);
productsRoutes.get("/:id", idProductVerification, readProductController);
productsRoutes.patch("/:id", idProductVerification, updateProductController);
productsRoutes.delete("/:id", idProductVerification, deleteProductController);
productsRoutes.get(
  "/category/:id",
  idCategoryVerification,
  readCategorysProductsController
);
