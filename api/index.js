const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => console.log(`::servidor rodando na porta ${port}`));


app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'Bem vindo ao mundo das APIs!'})
);


module.exports = app;