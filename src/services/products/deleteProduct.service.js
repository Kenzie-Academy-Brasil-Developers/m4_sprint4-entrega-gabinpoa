import database from "../../database";

export const deleteProductService = async (id) => {
  try {
    const res = await database.query("DELETE FROM products WHERE id = $1", [
      id,
    ]);
  } catch (err) {
    throw new Error(err);
  }
};
