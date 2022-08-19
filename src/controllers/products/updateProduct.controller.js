import { readProductService } from "../../services/products/readProduct.service";
import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const name = request.body.name || (await readProductService(id).name);
    const price = request.body.price || (await readProductService(id).price);
    const category_id =
      request.body.category_id || (await readProductService(id).category_id);

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
