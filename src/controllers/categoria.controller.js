import categoriaModel from "../models/categoria.model.js";

const categoriaController = {
  SelecionarTodos: async (req, res) => {
    try {
      const resultado = await categoriaModel.selecionarTodas();
      if (!resultado || resultado.length === 0) {
        return res.status(200).json({
          message: "Não existem categorias",
        });
      }
      res
        .status(200)
        .json({ message: "Categorias listadas:", data: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro no Servidor",
        errorMessage: error.message,
      });
    }
  },
};

export default categoriaController;
