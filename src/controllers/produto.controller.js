import produtoModel from "../models/produto.model.js";

const produtoController = {
  selecionarTodosClientes: async (req, res) => {
    try {
      const resultado = await produtoModel.selecinarPedido();
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

  cadastrarProduto: async (req, res) => {
    try {
      const { idCategoria, nome, valor, data } = req.body;
      if (
        !idCategoria ||
        isNaN(idCategoria) ||
        !nome ||
        isNaN(idCategoria) ||
        !valor ||
        isNaN(valor) ||
        !data
      ) {
        return res.status(400).json({
          message: "Dados invalidos",
        });
      }

      // upload

      const vinculo = req.file.path;
      if (!req.file) {
        return res.status(400).json({
          message: "Arquivo não enviado",
        });
      }
      
      const resultado = await produtoModel.cadastrarProduto(
        idCategoria,
        nome,
        valor,
        vinculo,
        data,
      );
      if (resultado.affectedRows === 1 && resultado.insertId != 0) {
        res.status(201).json({
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
