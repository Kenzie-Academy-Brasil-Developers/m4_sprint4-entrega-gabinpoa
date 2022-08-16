import database from "../../database";

export const updateCategoryService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
