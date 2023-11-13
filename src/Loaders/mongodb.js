const mogoose = require("mongoose");

async function startDB() {
  await mogoose.connect(process.env.MONGO_URI);

  console.log("db conectado");
}

module.exports = startDB;
