import pool from "../config/db.js";
const categoriaModel = {
  selecionarTodas: async () => {
    const sql = "SELECT * FROM categoria";
    const [rows] = await pool.query(sql);
    return rows;
  },
  inserirCategoria: async (pDescricao, pData) => {
    const sql =
      "INSERT INTO `loja`.`categoria` (`descricaoCategoria`,`dataCad`) VALUES (?,?);";
    const values = [pDescricao, pData];
    const [rows] = await pool.query(sql, values);
    console.log(rows);
    return rows;
  },
};
export default categoriaModel;
