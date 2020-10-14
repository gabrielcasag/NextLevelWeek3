import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

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

// 3 formas de lidar com banco de dados
// Driver Nativo => permite executar as querys direto pelo node mas sem abstrações(sql puro) 
// Query Builder => knex.js(+ famoso do node), escreve as querys com javascript, tipo o LINQ do C#(sintaxe mais amigavel)
// ORM => maior abstrção, uma classe simbolizando a tabela no banco. 
// Query e ORM => permitem trocar de SGBDs sem mudar a aplicação.