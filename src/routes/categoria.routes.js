import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";
const categoriaRoutes = Router();

categoriaRoutes.get("/categoria/", categoriaController.SelecionarTodos);
categoriaRoutes.post("/categoria/", categoriaController.criarCategoria);

export default categoriaRoutes;
