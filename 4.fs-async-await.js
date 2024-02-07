// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs
// Esto solo aplica a los módulos nativos sin promesas nativas

// Descomentar las siguientes líneas si no se tiene soporte para promesas nativas en los módulos
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const { readFile } = require('node:fs/promises')

// Función asincrónica para iniciar la lectura de archivos
async function init () {
  try {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer texto:', text)
    console.log('--> Hacer cosas mientras lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('Segundo texto:', secondText)
  } catch (err) {
    console.error('Error al leer archivos:', err)
  }
}

// Llama a la función asincrónica
init()

// IIFE - Inmediatly Invoked Function Expression
// (
//   async () => {
//     try {
//       console.log('Leyendo el primer archivo...');
//       const text = await readFile('./archivo.txt', 'utf-8');
//       console.log('Primer texto:', text);
//       console.log('--> Hacer cosas mientras lee el archivo...');

//       console.log('Leyendo el segundo archivo...');
//       const secondText = await readFile('./archivo2.txt', 'utf-8');
//       console.log('Segundo texto:', secondText);
//     } catch (err) {
//       console.error('Error al leer archivos:', err);
//     }
//   }
// )();
