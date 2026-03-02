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

  selecionarId: async (req, res) => {
    try {
      const id = Number(req.params.idProduto);
      if (!id || !Number.isInteger(id) || id.length === 0) {
        res.status(400).json({ Message: "Forneça ID valido" });
      }
      const resultadoId = await produtoModel.selecionarId(id);
      if(resultadoId.length === 0){
        return res.status(200).json({
          message:'Não há registros com esse ID'
        })
      }
      res.status(200).json({ 
        Message: "Resultado dos dados listados",
        data: resultadoId });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },

  cadastrarProduto: async (req, res) => {
    try {
      const { idCategoria, nome, valor } = req.body;
      if (!idCategoria || isNaN(idCategoria) || !nome || isNaN(idCategoria) || !valor || isNaN(valor)){
        return res.status(400).json({
          message: "Dados invalidos",
        });
      }

      // --------- Upload ----------

      const vinculo = req.file.path;

      if (!vinculo || vinculo.length === 0 || vinculo === undefined) {
        return res.status(400).json({
          message: "Arquivo não enviado",
        });
      }

      const resultado = await produtoModel.cadastrarProduto(idCategoria,nome,valor,vinculo);
      
      // ------ Verificação do arquivo --------

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
  removerProduto: async (req, res) => {
    try {
      const id = Number(req.params.idProduto);
      if (!id || !Number.isInteger(id)) {
        return req.status(400).json({ message: "Forneça um ID valido!" });
      }
      const consulta = await produtoModel.selecionarId(id);
      if (consulta.length === 0) {
        throw new Error("Registro não localizado");
      } else {
        const resultado = await produtoModel.excluirProduto(id);
        if (resultado.affectedRows === 1) {
          res.status(201).json({
            message: "Produto excluido com sucesso ",
            data: resultado,
          });
        } else {
          throw new Error("Não foi possivel excluir o produto");
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor.",
        errorMessage: error.message,
      });
    }
  },
  atualzarProduto: async (req, res) => {
    try {
      const idProduto = Number(req.params.idProduto);
      const { idCategoria, nome, valor } = req.body;
      const vinculo = req.file.path;
      const resultado = await produtoModel.atualizarProduto(
        valor,
        idCategoria,
        nome,
        vinculo,
        idProduto,
      );
      if(!valor || !idCategoria || !nome || !vinculo ||!idProduto || isNaN(valor) || isNaN(idCategoria) || isNaN(idProduto || nome.length <= 2) ){
        return res.status(400).json({
          message: 'Digite os valores certos'
        })
      } 
      if (resultado.changedRows === 0) {
        throw new Error("Ocorreu um erro ao atualizar o produto");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
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
