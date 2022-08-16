import database from "../../database";

export const readCategorysProductsService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM products p JOIN categories c ON c.id = p.category_id WHERE p.category_id = $1",
      [id]
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};
