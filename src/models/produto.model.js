import pool from "../config/db.js";

const produtoModel = {
  selecinarPedido: async () => {
    const sql = "SELECT * FROM produtos;";
    const [rows] = await pool.query(sql);
    console.log(rows);
    return rows;
  },
  selecionarId: async (pID) => {
    const sql = "SELECT * FROM produtos WHERE idProduto = ?;";
    const values = [pID];
    const [rows] = await pool.query(sql, values);
    console.log(rows)
    return rows;
  },

  cadastrarProduto: async (idCategoria, nome, valor, vinculo, data) => {
    const sql =
      "INSERT INTO `loja`.`produtos` (`idCategoria`, `nomeProduto`, `valorProduto`, `vínculoImagem`) VALUES (?,?,?,?);";
    const values = [idCategoria, nome, valor, vinculo];
    const [rows] = await pool.query(sql, values);
    console.log(rows);
    return rows;
  },
  excluirProduto: async (pID) => {
    
  },
};

export default produtoModel;
