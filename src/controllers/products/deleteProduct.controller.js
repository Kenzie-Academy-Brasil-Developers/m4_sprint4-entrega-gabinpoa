import { deleteProductService } from "../../services/products/deleteProduct.service";

export const deleteProductController = async (request, response) => {
  try {
    await deleteProductService(request.params.id);

    return response.status(204).json();
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
