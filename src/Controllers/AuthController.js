const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuarioEncontado = await UsuarioModel.findOne({ email }).select(
        "+senha"
      );
      if (!usuarioEncontado)
        return res.status(403).json({ message: "E-mail ou senha inválidos" });

      const ehCorrespondente = await bcrypt.compare(
        senha,
        usuarioEncontado.senha
      );
      if (!ehCorrespondente)
        return res.status(403).json({ message: "E-mail ou senha inválidos" });

      const { senha: hashedSenha, ...usuario } = usuarioEncontado.toObject();

      const token = jwt.sign(usuario, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}

module.exports = new AuthController();
