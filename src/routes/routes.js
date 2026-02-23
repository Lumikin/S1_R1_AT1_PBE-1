import express from "express";
const router = express.Router();
import produtoRoutes from "./produto.routes.js";
import categoriaRoutes from "./categoria.routes.js";

router.use("/", produtoRoutes);
router.use("/", categoriaRoutes);

export default router;
