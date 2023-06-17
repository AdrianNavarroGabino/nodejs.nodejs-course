const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp);

            return []; // retornar los lugares que coinciden con el argumento
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;