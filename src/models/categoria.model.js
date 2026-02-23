import pool from "../config/db.js";
const categoriaModel = {
  selecionarTodas: async () => {
    const sql = "SELECT * FROM categoria";
    const [rows] = await pool.query(sql);
    return rows;
  },
};
export default categoriaModel;
