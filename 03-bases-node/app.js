const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.l)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));

crearArchivo2(argv.b + 1, argv.l)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));