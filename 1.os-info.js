// Importa el módulo 'os' para acceder a información del sistema operativo
const os = require('node:os');

// Importa la función 'uptime' del módulo 'process' para obtener el tiempo de actividad del proceso actual
const { uptime } = require('node:process');

// Imprime información sobre el sistema operativo
console.log('Información del Sistema Operativo:');
console.log('__________________');

// Imprime el nombre del sistema operativo
console.log('Nombre del Sistema Operativo:', os.platform());

// Imprime la versión del sistema operativo
console.log('Versión del Sistema Operativo:', os.release());

// Imprime la arquitectura del sistema
console.log('Arquitectura:', os.arch());

// Imprime información sobre las CPUs del sistema
console.log('CPUs:', os.cpus());

// Imprime la cantidad de memoria libre en megabytes
console.log('Memoria Libre:', os.freemem() / 1024 / 1024, 'MB');

// Imprime la cantidad total de memoria en megabytes
console.log('Memoria Total:', os.totalmem() / 1024 / 1024, 'MB');

// Imprime el tiempo de actividad del sistema en horas
console.log('Tiempo de Actividad:', os.uptime() / 60 / 60, 'horas');
