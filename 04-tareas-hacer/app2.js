require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");


console.clear();

const main = async() => {
    
    console.log("Hola, mundo");
    let opt = '';

    do {
        //opt = await inquirerMenu();

        const tarea = new Tarea('Comprar comida');
        console.log(tarea);

        const tareas = new Tareas();

        tareas._listado[tarea.id] = tarea;

        console.log(tareas);
        if(opt != '0')
            await pausa();
    } while(opt !== '0');
}

main();