import pedidoModel from "../models/produto.model.js";

const produtoController = {
  selecionarTodosCleintes: async (req, res) => {
    try {
      const resultado = await pedidoModel.selecinarPedido();
      if (!resultado || resultado.length === 0) {
        return res.status(200).json({
          message: "A tabela não contem registros",
        });
      }
      res.status(200).json({ message: "Dados listados:", data: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro no Servidor",
        errorMessage: error.message,
      });
    }
  },

  upload: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "Arquivo não enviado",
        });
      }
      res.status(200).json({
        message: "Upload realizado com sucesso",
        file: {
          filename: req.file.filename,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro no Servidor",
        errorMessage: error.message,
      });
    }
  },
};

export default produtoController;
