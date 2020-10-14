import express from 'express';

const app = express();

app.use(express.json());

// criando uma ROTA com RECURSOS de usuario
app.post('/users/:id', (req, res) => {
  console.log(req.query);  
  console.log(req.params);  
  console.log(req.body);

  return res.json({ message: 'HELLO WORLD!' });
});

app.listen(3333);

// node funciona no fluxo padrao REQUISIÇÂO -> RESPOSTA
// express é um framework simples em node que ajuda a lidar com reqs
// ajuda a configurar as rotas 

// MÉTODOS HTTP = GET, POST, PUT, DELETE
// SIGINIFICADO SEMANTICO
// GET = buscando informação
// POST = enviando/criando informação
// PUT = editando uma informação
// DELETE = removendo uma informação

// PARAMETROS
// QUERY PARAMS => enviados na rota, usados mais em filtros, paginacao ex: rota/users?page=2 
// ROUTE PARAMS => enviados na rota tmb mas para identificar um recurso, ex: rota/users/1
// BODY => no corpo da requisição, enviar dados de formulários por exemplo