const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  senha: String,
  nome: {
    type: String,
    unique: true,
  },
  cargo: String,
});

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;
