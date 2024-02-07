// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs
const fs = require('node:fs')

// Lectura sincrónica del primer archivo 'archivo.txt'
console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo...')

// Lectura sincrónica del segundo archivo 'archivo2.txt'
console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', secondText)
