//Apartir del Node.js 16, se recomienda utilizar 'node:' antes de fs
const fs = require('node:fs')

//Lectura asincronica del primer archivo 'archivo.txt'
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

//Conotinuacion del codigo, este se ejecuta mientras se lee el primer archivo
//Lectura asincronica del codigo del segundo archivo 'archivo2.txt'
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})