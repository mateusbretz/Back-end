const mogoose = require("mongoose");

async function startDB() {
  await mogoose.connect(
    "mongodb+srv://mateusbretz:MFyIPDfF2N34YVTc@cursonode.3dtejf3.mongodb.net/?retryWrites=true&w=majority"
  );
}

module.exports = startDB;
