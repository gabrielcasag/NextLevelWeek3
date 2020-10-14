import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// criando uma ROTA com RECURSOS de usuario
routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);


export default routes;

// o padrao arquitetural MVC é muito usado no desenvolvimento web
// M => models, manipulação dos dados, representaçao das entidades
// V => views, como as coisas sao visualizadas, frontend
// C => controllers, logica das rotas
// padrao dos controllers é ter os metodos para:
// index, show, create, update, delete
