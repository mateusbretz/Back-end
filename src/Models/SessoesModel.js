const mogoose = require("mogoose");

const Schema = mongoose.Schema;

const SessoesSchema = new Schema(
  {
    id_usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuarios",
    },
  },
  {
    timeStamps: true,
  }
);

const SessoesModel = mongoose.model("sessoes", SessoesSchema);
module.exports = SessoesModel;
