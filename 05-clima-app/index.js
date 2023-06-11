const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
    let option;

    while (option !== 0) {
        option = await inquirerMenu();

        switch (option) {
            case 0:
                console.log('Hasta pronto');
                break;
            case 1:
                console.log('buscar');
                break;
            case 2:
                console.log('historial');
                break;
        }

        await pausa();
    }
}

main();