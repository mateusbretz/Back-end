const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesControllers = require("./Controllers/SessoesControllers");
const AuthController = require("./Controllers/AuthController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const AuthValidator = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verficarUsuario");

const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete(
  "/usuarios/:id",
  verificarJwt,
  verificarUsuario,
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put(
  "/usuarios/:id",
  verificarJwt,
  verificarUsuario,
  UsuarioValidator.update,
  UsuarioController.update
);

//SESSOES
rotas.post(
  "/sessoes",
  verificarJwt,
  verificarUsuario,
  SessoesValidator.create,
  SessoesControllers.create
);
rotas.get("/sessoes", verificarJwt, SessoesControllers.read);
rotas.delete(
  "/sessoes/:id_usuario",
  verificarJwt,
  SessoesValidator.destroy,
  SessoesControllers.delete
);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;
