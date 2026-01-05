import database from "../../../../infra/database.js";

function status(request, response) {
  console.log(database);
  response.status(200).json({ chave: "to cut uranium deal" });
}

export default status;
