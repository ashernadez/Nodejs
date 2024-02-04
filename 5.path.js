// A partir de Node.js 16, se recomienda utilizar 'node:' antes de path
const path = require('node:path');

// Imprime la barra separadora de carpetas según el sistema operativo
console.log(path.sep);

// Une rutas utilizando path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// Obtiene el nombre base de una ruta
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

// Obtiene el nombre de archivo sin la extensión
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

// Obtiene la extensión de un nombre de archivo
const extension = path.extname('my.super.image.jpg');
console.log(extension);
