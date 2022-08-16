import database from "../../database";

export const updateProductService = async (id, name, price, category_id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $2, price = $3, category_id = $4 WHERE id = $1 RETURNING *",
      [id, name, price, category_id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
