// Criar uma instância do servidor
import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
})

export default server;