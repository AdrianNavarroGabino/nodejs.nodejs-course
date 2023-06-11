const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let option;

    while (option !== 0) {
        option = await inquirerMenu();

        switch (option) {
            case 0:
                console.log('Hasta pronto');
                break;
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                // Buscar los lugares
                // Seleccionar el lugar
                // Clima
                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperatura: ');
                console.log('Mínima: ');
                console.log('Máxima: ');

                break;
            case 2:
                console.log('historial');
                break;
        }

        await pausa();
    }
}

main();