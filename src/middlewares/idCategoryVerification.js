import database from "../database";

export const idCategoryVerification = async (request, response, next) => {
  try {
    const { id } = request.params;

    const res = await database.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);

    if (res.rows.length === 0) {
      return response.status(400).json({ message: "Category not found" });
    } else {
      next();
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
