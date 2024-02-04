// A partir de Node.js 16, se recomienda utilizar 'node:' antes de http
const http = require('node:http'); // Protocolo HTTP

// Crea un servidor HTTP que responde con 'Hola Mundo'
const server = http.createServer((req, res) => {
    console.log('Solicitud recibida');
    res.end('Hola Mundo');
});

// Escucha en un puerto disponible aleatorio (0 indica un puerto aleatorio)
server.listen(0, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`);
});
