import { readCategorysProductsService } from "../../services/products/readCategorysProducts.service";

export const readCategorysProductsController = async (request, response) => {
  try {
    const products = await readCategorysProductsService(request.params.id);

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
