import database from "../../database";

export const deleteCategoryService = async (id) => {
  try {
    const res = await database.query("DELETE FROM categories WHERE id = $1", [
      id,
    ]);
  } catch (err) {
    throw new Error(err);
  }
};
