const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');

console.clear();

const [,,arg3 = '--base=5'] = process.argv;
const [,base = 5] = arg3.split('=')


crearArchivo(base)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));

crearArchivo2(base + 1)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));