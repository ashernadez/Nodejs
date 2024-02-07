// A partir de Node.js 16, se recomienda utilizar 'node:' antes de http
const http = require('node:http') // Protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

// Imprime las variables de entorno del proceso
console.log(process.env)

// Obtiene el puerto deseado del entorno o usa el puerto 3000 por defecto
const desiredPort = process.env.PORT ?? 3000

// Crea un servidor HTTP que responde con 'Hola mundo'
const server = http.createServer((req, res) => {
  console.log('Solicitud recibida')
  res.end('Hola mundo')
})

// Busca un puerto disponible y escucha en él
findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
  })
})
