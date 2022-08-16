import { createCategoryService } from "../../services/categories/createCategory.service";

export const createCategoryController = async (request, response) => {
  try {
    const createdCategory = await createCategoryService(request.body.name);

    return response
      .status(201)
      .json({ message: "Category created", category: createdCategory });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
