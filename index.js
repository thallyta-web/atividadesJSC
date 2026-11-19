const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/sobre', (req, res) => {
  res.send('Sobre')
})

app.post('/', (req, res) => {
  res.send(`Enviando o método POST, para inserir dados.`)
});

app.put('/', (req, res) => {
  res.send(`Enviando o método PUT, para atualizar dados.`)
})

app.delete('/', (req, res) => {
  res.send(`Enviando o método DELETE, para excluir dados`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})