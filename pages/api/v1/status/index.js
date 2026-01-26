import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SELECT version ();");
  console.log(databaseVersionResult.rows);

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
