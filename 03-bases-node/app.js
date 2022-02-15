const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');

console.clear();

const base = 5;

crearArchivo(base)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));

crearArchivo2(base + 1)
    .then((filename) => console.log(`${filename} creado`))
    .catch((err) => console.log(err));