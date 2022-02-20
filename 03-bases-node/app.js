const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');

console.clear();


crearArchivo(argv.b, argv.l)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));

crearArchivo2(argv.b + 1, argv.l)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));