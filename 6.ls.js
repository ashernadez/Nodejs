//A partir de Node.js 16, se recomienda utilizar 'node' antes de fs
const fs = require('node:fs/promises')

//Lee el contenido del directorio actual
fs.readdir('.')
  .then(files => {
    //Itera sobre los archivos y directorios obtenidos
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      //Maneja el error en caso de que ocurra durante la lectura del directorio
      console.error('Error al leer el directorio: ', err)
      return;
    }
  })