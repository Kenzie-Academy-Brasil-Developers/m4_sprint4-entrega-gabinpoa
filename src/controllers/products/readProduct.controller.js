import { readProductService } from "../../services/products/readProduct.service";

export const readProductController = async (request, response) => {
  try {
    const product = await readProductService(request.params.id);

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
