// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs
// Esto solo aplica a los módulos nativos sin promesas nativas

// Descomentar las siguientes líneas si no se tiene soporte para promesas nativas en los módulos
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises'

// Utiliza Promise.all para leer ambos archivos de forma concurrente
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto:', text)
  console.log('Segundo texto:', secondText)
}).catch((err) => {
  console.error('Error al leer archivos:', err)
})
