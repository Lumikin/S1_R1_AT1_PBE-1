import pool from "../config/db.js";

const produtoModel = {
  selecinarPedido: async () => {
    const sql = "SELECT * FROM produtos;";
    const [rows] = await pool.query(sql);
    console.log(rows);
    return rows;
  },
  cadastrarProduto: async (
    idCategoria,
    nome,
    valor,
    vinculo,
    data,
  ) => {
    const sql =
      "INSERT INTO `loja`.`produtos` (`idCategoria`, `nomeProduto`, `valorProduto`, `vínculoImagem`, `dataCad`) VALUES (?,?,?,?,?);";
    const values = [idCategoria, nome, valor, vinculo, data];
    const [rows] = await pool.query(sql, values);
    console.log(rows);
    return rows;
  },
};

export default produtoModel;
