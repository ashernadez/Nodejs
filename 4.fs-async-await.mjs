// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs
// Esto solo aplica a los módulos nativos sin promesas nativas

// Descomentar las siguientes líneas si no se tiene soporte para promesas nativas en los módulos
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)
console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)