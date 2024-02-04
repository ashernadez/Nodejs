// A partir de Node.js 16, se recomienda utilizar 'node:' antes de net
const net = require('node:net');

//Función asincrónica que encuentra un puerto disponible para escuchar.
function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Si el puerto está en uso, intenta encontrar un puerto disponible (0 indica un puerto aleatorio)
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        // Rechaza la promesa en caso de otro error
        reject(err);
      }
    });
  });
}

// Exporta la función findAvailablePort
module.exports = { findAvailablePort };