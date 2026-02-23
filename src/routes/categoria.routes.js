import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";
const categoriaRoutes = Router();

categoriaRoutes.get("/categoria/", categoriaController.SelecionarTodos);

export default categoriaRoutes;
