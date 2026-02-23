import express from "express";
import produtoRoutes from "./routes/produto.routes.js";
import "dotenv/config";

const app = express();

app.use("/", produtoRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodadndo em http://localhost:${process.env.PORT}`);
});
