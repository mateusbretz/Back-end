const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

    async create(req, res) {
    const usuario = await UsuarioModel.create(req.body);
    return res.status(200).json(usuario);
    }

    async read(req, res) {

    }
    async update(req, res) {

    }
    async delete(req, res) {

    }
}

module.exports = new UsuarioController(); 
    
