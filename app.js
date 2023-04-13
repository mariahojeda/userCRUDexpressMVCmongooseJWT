const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const connectToDatabase = require('./database.js');

// Importando rotas
const userRoutes = require('./routes/user');

// Configurações do banco de dados
connectToDatabase();

// Configurando o body-parser para receber dados via JSON
app.use(bodyParser.json());

// Configurando a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota com callback
app.get('/rota-com-callback', (req, res) => {
  res.send('Hello World!');
});

// Configurando rotas
app.use('/api/user', userRoutes);

// Configurando erro 404
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada.');
});

// Configurando erro 500
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Erro interno do servidor.');
});

// Iniciando servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta 3000. http://localhost:${PORT}`);
});
