require("colors");
const { inquirerMenu } = require("./helpers/inquirer");


console.clear();

const main = async() => {
    
    console.log("Hola, mundo");
    let opt = '';

    do {
        opt = await inquirerMenu();
    } while(opt !== '0');
}

main();