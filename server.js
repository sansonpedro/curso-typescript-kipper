import express from 'express'
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // CORS
app.use(express.json()); // Parser JSON
app.use(express.urlencoded({ extended: true })); // Parser URL-encoded

let produtos = [
  { id: 1, nome: "Ryzen 5500", descricao: "Processador", preco: 500 },
  { id: 2, nome: "Ryzen 7 5700x", descricao: "Processador", preco: 1049 },
  { id: 3, nome: "Machenike K500", descricao: "Teclado", preco: 219 },
];

// Crio a rota Get para ver os meus produtos
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  res.json(produtos.id);
});

// Crio a rota Post para poder criar meus produtos
app.post("/produtos", (req, res) => {
  console.log(req.body);
  const novoProduto = {
    id: produtos.length + 1,
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };
  produtos.push(novoProduto);
  res.status(201).json({ mensagem: "Produto adicionado com sucesso!", produto: novoProduto });
});

// Crio a rota Put para atualizar um produto
app.put("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }
  produto.nome = req.body.nome;
  produto.descricao = req.body.descricao;
  produto.preco = req.body.preco;
  res.json({ mensagem: "Produto atualizado!", produto });
});

app.delete("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }
  produtos.splice(index, 1);
  res.json({ mensagem: "Produto excluído com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${port}`);
});