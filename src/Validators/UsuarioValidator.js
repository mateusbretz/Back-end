const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

/*{
    "email": "teste2@teste.com",
	"senha": "cpejr123456",
	"nome": "messi",
	"cargo": "consultor de tecnologia",
}*/

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    email: z
      .string({ required_error: "O email é obrigatório" })
      .email("O email é inválido"),
    senha: z.string({ required_error: "A senha é obrigatória" }),
    cargo: z.string({ required_error: "O cargo é obrigatório" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    email: z.string().email("O email é inválido").optional(),
    senha: z.string().optional(),
    cargo: z.string().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
