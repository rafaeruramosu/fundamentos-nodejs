const express = require('express')

const app = express()

app.use(express.json())

/**
 * TIPOS DE MÉTODOS
 * 
 * GET - Buscar uma informação do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * TIPOS DE PARÂMETROS
 * 
 * Route Params - Identificar um recurso para poder buscar, editar ou deletar (ex: /courses/:id)
 * Query Params - Paginação, filtro (ex: /courses?page=1&order=asc)
 * Body Params - Objetos da qual serão inseridos ou alterados (JSON) (ex: { "name": "NodeJS" })
 */

app.get('/courses', (req, res) => {
  const query = req.query
  console.log(query)

  return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post('/courses', (req, res) => {
  const body = req.body
  console.log(body)

  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put('/courses/:id', (req, res) => {
  const params = req.params;
  console.log(params)

  return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch('/courses/:id', (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete('/courses/:id', (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 4"])
})

app.listen(3333)