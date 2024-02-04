// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs
// Esto solo aplica a los módulos nativos sin promesas nativas

// Descomentar las siguientes líneas si no se tiene soporte para promesas nativas en los módulos
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises');

// Lectura asincrónica del primer archivo 'archivo.txt'
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto:', text);
  })
  .catch(err => {
    console.error('Error al leer el primer archivo:', err);
  });

// Continuación del código, se ejecuta mientras se lee el primer archivo

// Lectura asincrónica del segundo archivo 'archivo2.txt'
console.log('--> Hacer cosas mientras lee el archivo...');
console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto:', text);
  })
  .catch(err => {
    console.error('Error al leer el segundo archivo:', err);
  });
