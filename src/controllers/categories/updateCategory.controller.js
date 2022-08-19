import { updateCategoryService } from "../../services/categories/updateCategory.service";
import { getCategoryName } from "../../util/getCategoryName";

export const updateCategoryController = async (request, response) => {
  try {
    const name = request.body.name;
    const id = request.params.id;
    const updatedCategory = await updateCategoryService(name, id);

    return response
      .status(200)
      .json({ message: "Category updated", category: updatedCategory });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
