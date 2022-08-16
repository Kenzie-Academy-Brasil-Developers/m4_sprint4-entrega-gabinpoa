import { deleteCategoryService } from "../../services/categories/deleteCategory.service";

export const deleteCategoryController = async (request, response) => {
  try {
    await deleteCategoryService(request.params.id);

    return response.status(204).json();
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
