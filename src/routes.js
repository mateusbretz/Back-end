const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesControllers = require("./Controllers/SessoesControllers");

const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete("/usuarios/:id", UsuarioController.delete);

//SESSOES
rotas.post("/sessoes", SessoesControllers.create);
rotas.get("/sessoes", SessoesControllers.read);
rotas.delete("/sessoes/:id", SessoesControllers.delete);


module.exports = rotas;
