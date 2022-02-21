require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async() => {
    console.clear();
    console.log("Hola, mundo");

    mostrarMenu();

    //pausa();
}

main();