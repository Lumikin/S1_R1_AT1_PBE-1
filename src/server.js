import express from "express";
import "dotenv/config";
import router from "./routes/routes.js";

const app = express();

app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodadndo em http://localhost:${process.env.PORT}`);
});
