const fs = require('fs');
require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        let salida = "";

        if(listar) {
            console.log("=========================");
            console.log(`Tabla del ${base.toString().cyan}`);
            console.log("=========================");
        }

        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar) {
            console.log(salida);
        }

        /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;

            console.log(`Archivo tabla-${base}.txt creado`);
        });*/

        try {
            fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        }
        catch(err) {
            reject(err);
        }
    });
}

const crearArchivo2 = async(base = 5, listar = false, hasta = 10) => {
    let salida = "";

    if(listar) {
        console.log("=========================");
        console.log(`Tabla del ${base.toString().yellow}`);
        console.log("=========================");
    }

    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar) {
        console.log(salida);
    }

    try {
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo,
    crearArchivo2
};