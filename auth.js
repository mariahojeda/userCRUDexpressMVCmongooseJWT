const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar se o usuário existe e se a senha está correta
  if (email === 'user@example.com' && password === '123456') {
    // Gerar token JWT
    const token = jwt.sign({ email }, 'my_secret_key');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

module.exports = router;
