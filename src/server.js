import express from "express"
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor rodadndo em http://localhost:${PORT}`);
});