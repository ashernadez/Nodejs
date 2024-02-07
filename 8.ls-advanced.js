// A partir de Node.js 16, se recomienda utilizar 'node:' antes de fs y path
const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// Obtiene la carpeta del primer argumento de la línea de comandos o usa el directorio actual por defecto
const folder = process.argv[2] ?? '.'

// Función asincrónica que lista y muestra información sobre los archivos en una carpeta.
async function ls (folder) {
  let files

  try {
    // Lee los archivos en la carpeta
    files = await fs.readdir(folder)
  } catch (err) {
    // Maneja el error si no se puede leer la carpeta
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1);
  }

// Mapea cada archivo para obtener información detallada
const filesPromises = files.map(async (file) => {
  const filePath = path.join(folder, file);
  let stats;

  try {
    // Obtiene información del archivo
    stats = await fs.stat(filePath);
  } catch (err) {
    // Maneja el error si no se puede obtener información del archivo
    console.error(`No se pudo leer el archivo ${filePath}`);
    process.exit(1);
  }

  // Determina si el archivo es un directorio o un archivo regular
  const isDirectory = stats.isDirectory();
  const fileType = isDirectory ? 'd' : 'f';
  const fileSize = stats.size.toString();
  const fileModified = stats.mtime.toLocaleString();

   // Crea una línea de información formateada sobre el archivo
   return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(
    fileSize.padStart(10)
  )} ${pc.yellow(fileModified)}`;
});

// Espera a que todas las promesas se resuelvan y obtenga información detallada de cada archivo
const filesInfo = await Promise.all(filesPromises);

// Imprime la información detallada de cada archivo en la consola
filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

// Llama a la función ls con la carpeta especificada
ls(folder);