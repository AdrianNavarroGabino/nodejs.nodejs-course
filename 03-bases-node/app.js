const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
require('colors');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then((filename) => console.log(`${filename} creado`.rainbow))
    .catch((err) => console.log(err.red));

crearArchivo2(argv.b + 1, argv.l, argv.h)
    .then((filename) => console.log(`${filename} creado`.trap))
    .catch((err) => console.log(err.magenta));