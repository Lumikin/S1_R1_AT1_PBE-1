import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";
import uploadImage from "../middleware/uploadimage.middleware.js";
const produtoRoutes = Router();

produtoRoutes.get("/produtos/", produtoController.selecionarTodosClientes);
produtoRoutes.post  (
  "/produtos/cadastro",
  uploadImage,
  produtoController.cadastrarProduto,
);

export default produtoRoutes;
