const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesControllers = require("./Controllers/SessoesControllers");
const AuthController = require("./Controllers/AuthController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const AuthValidator = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", verificarJwt, UsuarioController.read);
rotas.delete(
  "/usuarios/:id",
  verificarJwt,
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put(
  "/usuarios/:id",
  verificarJwt,
  UsuarioValidator.update,
  UsuarioController.update
);

//SESSOES
rotas.post(
  "/sessoes",
  verificarJwt,
  SessoesValidator.create,
  SessoesControllers.create
);
rotas.get("/sessoes", verificarJwt, SessoesControllers.read);
rotas.delete(
  "/sessoes/:id",
  verificarJwt,
  SessoesValidator.destroy,
  SessoesControllers.delete
);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;
