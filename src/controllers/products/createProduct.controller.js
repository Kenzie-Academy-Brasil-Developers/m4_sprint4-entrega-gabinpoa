import { createProductService } from "../../services/products/createProduct.service";

export const createProductController = async (request, response) => {
  try {
    const { name, price, category_id } = request.body;

    const createdProduct = await createProductService(name, price, category_id);

    return response
      .status(201)
      .json({ message: "Product created", product: createdProduct });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
