const deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "Regeneración",
    //edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellid} ${this.poder}`;
    }
};

{
    const nombre = deadpool.nombre;
    const apellido = deadpool.apellido;
    const poder = deadpool.poder;
    console.log(nombre, apellido, poder);
}

{
    const {nombre, apellido, poder, edad = 0} = deadpool;
    console.log(nombre, apellido, poder, edad);
}

function imprimeHeroe(heroe) {
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(deadpool);

function imprimeHeroe(heroe) {
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

{
    const h1 = heroes[0];
    const h2 = heroes[1];
    const h3 = heroes[2];
    console.log(h1, h2, h3);
}

{
    const [h1, h2, h3] = heroes;
    console.log(h1, h2, h3);
}

{
    const[,,h3] = heroes;
    console.log(h3);
}