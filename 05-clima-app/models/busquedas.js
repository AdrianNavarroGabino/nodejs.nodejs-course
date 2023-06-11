class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        // TODO: petición http
        console.log(lugar);

        return []; // retornar los lugares que coinciden con el argumento
    }
}

module.exports = Busquedas;