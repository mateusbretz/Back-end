const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesControllers = require("./Controllers/SessoesControllers");
const UsuarioValidator = require("./Validators/UsuarioValidator");

const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete(
  "/usuarios/:id",
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put("/usuarios/:id", UsuarioValidator.update, UsuarioController.update);
//SESSOES
rotas.post("/sessoes", SessoesControllers.create);
rotas.get("/sessoes", SessoesControllers.read);
rotas.delete("/sessoes/:id", SessoesControllers.delete);

module.exports = rotas;
