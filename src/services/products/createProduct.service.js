import database from "../../database";
import { v4 as uuidv4 } from "uuid";

export const createProductService = async (name, price, category_id) => {
  try {
    const id = uuidv4();
    const res = await database.query(
      "INSERT INTO products (id, name, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *;",
      [id, name, price, category_id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
