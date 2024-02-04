// Importa funciones específicas del módulo 'os' y 'process'
import { platform, release, arch, cpus, freemem, totalmem, uptime as _uptime } from 'node:os';
import { uptime } from 'node:process';

// Imprime información sobre el sistema operativo
console.log('Información del Sistema Operativo:');
console.log('__________________');

// Imprime el nombre del sistema operativo
console.log('Nombre del Sistema Operativo:', platform());

// Imprime la versión del sistema operativo
console.log('Versión del Sistema Operativo:', release());

// Imprime la arquitectura del sistema
console.log('Arquitectura:', arch());

// Imprime información sobre las CPUs del sistema
console.log('CPUs:', cpus());

// Imprime la cantidad de memoria libre en megabytes
console.log('Memoria Libre:', freemem() / 1024 / 1024, 'MB');

// Imprime la cantidad total de memoria en megabytes
console.log('Memoria Total:', totalmem() / 1024 / 1024, 'MB');

// Imprime el tiempo de actividad del sistema en horas
console.log('Tiempo de Actividad:', _uptime() / 60 / 60, 'horas');
