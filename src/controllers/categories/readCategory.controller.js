import { readCategoryService } from "../../services/categories/readCategory.service";

export const readCategoryController = async (request, response) => {
  try {
    const category = await readCategoryService(request.params.id);

    return response.status(200).json(category);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
