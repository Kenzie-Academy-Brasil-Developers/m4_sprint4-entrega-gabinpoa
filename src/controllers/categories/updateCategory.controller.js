import { updateCategoryService } from "../../services/categories/updateCategory.service";

export const updateCategoryController = async (request, response) => {
  try {
    const updatedCategory = await updateCategoryService(
      request.body.name,
      request.params.id
    );

    return response
      .status(200)
      .json({ message: "Category updated", category: updatedCategory });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
