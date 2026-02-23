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
  criarCategoria: async (req, res) => {
    try {
      const { descricao, data } = req.body;
      if (!descricao || !data || descricao.length <= 2) {
        return res.status(400).json({
          message: "Dados Invalidos",
        });
      }
      const resultado = await categoriaModel.inserirCategoria(descricao, data);
      if (resultado.affectedRows === 1 && resultado.insertId != 0) {
        res
          .status(201)
          .json({
            message: "Registro incluido com sucesso",
            result: resultado,
          });
      } else {
        throw new Error("ocorreu um erro ao incluir o registro");
      }
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
