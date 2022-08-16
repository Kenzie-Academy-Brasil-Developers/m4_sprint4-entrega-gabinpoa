import database from "../database";

export const idProductVerification = async (request, response, next) => {
  try {
    const { id } = request.params;

    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (res.rows.length === 0) {
      return response.status(400).json({ message: "Product not found" });
    } else {
      next();
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};
