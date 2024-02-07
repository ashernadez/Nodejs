// Imprime los argumentos de entrada del proceso
// console.log(process.argv);

// Controla el proceso y su salida, este ejemplo termina el proceso con código de salida 1
// process.exit(1);

// Ejemplo de control de eventos del proceso
// process.on('exit', () => {
//    // Limpiar recursos al salir del proceso
// });

// Imprime el directorio de trabajo actual del proceso
console.log('Directorio de trabajo actual:', process.cwd())

// Imprime el valor de una variable de entorno llamada 'PEPE'
console.log('Valor de la variable de entorno "PEPE":', process.env.PEPE)
