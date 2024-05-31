const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;

// Defina o diretório de onde as imagens serão servidas
const imagePath = path.join(__dirname, 'src', 'main', 'resources', 'Covers');

// Defina o middleware para servir arquivos estáticos
app.use('/covers', express.static(imagePath));

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
