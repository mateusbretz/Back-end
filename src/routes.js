const { Router } = require("express");
const UsuarioController = require("../Controller/UsuarioController");

const rotas = Routes();

rotas.post("/usuarios", UsuarioController.create);
