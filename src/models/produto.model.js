import pool from "../config/db.js";

const produtoModel = {
  selecinarPedido: async () => {
    const sql = "SELECT * FROM produtos;";
    const [rows] = await pool.query(sql);
    return rows;
  },
  cadastrarProduto: async (params) => {},
};

export default produtoModel;
