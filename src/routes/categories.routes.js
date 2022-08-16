import { Router } from "express";
import { createCategoryController } from "../controllers/categories/createCategory.controller";
import { deleteCategoryController } from "../controllers/categories/deleteCategory.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";
import { readCategoryController } from "../controllers/categories/readCategory.controller";
import { updateCategoryController } from "../controllers/categories/updateCategory.controller";
import { idCategoryVerification } from "../middlewares/idCategoryVerification";

export const categoriesRoutes = Router();

categoriesRoutes.post("", createCategoryController);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id", idCategoryVerification, readCategoryController);
categoriesRoutes.patch(
  "/:id",
  idCategoryVerification,
  updateCategoryController
);
categoriesRoutes.delete(
  "/:id",
  idCategoryVerification,
  deleteCategoryController
);
