import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const routes = Router();

// criando uma ROTA com RECURSOS de usuario
routes.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  return res.status(201).json({ message: 'Orfanato Salvo com Sucesso!' });
});

export default routes;

// o padrao arquitetural MVC é muito usado no desenvolvimento web
// M => models, manipulação dos dados, representaçao das entidades
// V => views, como as coisas sao visualizadas, frontend
// C => controllers, logica das rotas