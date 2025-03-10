// Api significa Application Programming Interface
//CRUD: Create, Read, Update, Delete
//GET: Ler ou buscar uma informação
//POST: Criar uma informação
//PUT: Editar uma informação
//DELETE: Deletar uma informação
//Middleware: Interceptador de requisições

import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const PORT = 3002;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! Agora nao precisa atualizar o servidor para ver as mudanças!');
});

app.get('/artists', async (req, res) => {
    res.send(await db.collection('artists').find({}).toArray());
  });

app.get('/songs', async (req, res) => {
    res.send(await db.collection('songs').find({}).toArray());
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

