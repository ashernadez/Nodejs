// A partir de node 16,  se recomienda poner node: antes de fs
const fs = require ('node:fs')

// Obtiene las estadísticas del archivo 'archivo.txt' de forma síncrona
const stats = fs.statSync('./archivo.txt')


// Imprime información sobre el archivo
console.log(
        stats.isFile(), // si es un fichero 
        stats.isDirectory(), // si es un directorio
        stats.isSymbolicLink(), // si es un enlace simbolico
        stats.size //  Tamaño de bytes
)