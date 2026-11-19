const express = require('express');
const app = express()
const port = 3000

//app.use(express.json());

app.get('/', (req, res) => {
    app.send('Início')
});

app.put('/', (req, res) => {
    app.send('Atualizando dados')
})

const usuarios = [{
    nome: 'Thallyta',
    idade: 18
}];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})