import { listCategoryService } from "../../services/categories/listCategories.service";

export const listCategoriesController = async (request, response) => {
  try {
    const categories = await listCategoryService();

    return response.status(200).json(categories);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
