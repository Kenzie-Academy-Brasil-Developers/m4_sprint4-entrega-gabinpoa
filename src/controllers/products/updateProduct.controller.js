import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, price, category_id } = request.body;

    const updatedProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );

    return response
      .status(200)
      .json({ message: "Product updated", product: updatedProduct });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
