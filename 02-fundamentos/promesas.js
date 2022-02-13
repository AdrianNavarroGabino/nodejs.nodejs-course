const empleados = [
    {
        id: 1,
        nombre: 'Adrian'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];
/*
{
    const getEmpleado = (id) => {
        const promesa = new Promise((resolve, reject) => {
            const empleado = empleados.find(e => e.id === id)?.nombre;
            
            if(empleado) {
                resolve(empleado);
            }
            else {
                reject(`No existe el empleado ${id}`);
            }
        });

        return promesa;
    }

    const id = 4;

    getEmpleado(id)
        .then(empleado => console.log(empleado))
        .catch(err => console.log(err));
}

{
    const getEmpleado = (id) => {
        return new Promise((resolve, reject) => {
            const empleado = empleados.find(e => e.id === id)?.nombre;
            
            empleado ? resolve(empleado) :
                reject(`No existe el empleado ${id}`);
        });
    }

    const id = 3;

    getEmpleado(id)
        .then(empleado => console.log(empleado))
        .catch(err => console.log(err));
}

{
    const getEmpleado = (id) => {
        return new Promise((resolve, reject) => {
            const empleado = empleados.find(e => e.id === id)?.nombre;
            
            empleado ? resolve(empleado) :
                reject(`No existe el empleado ${id}`);
        });
    }

    const getSalario = (id) => {
        return new Promise((resolve, reject) => {
            const salario = salarios.find(s => s.id === id)?.salario;

            salario ? resolve(salario) : reject (`El salario ${id} no existe`);
        });
    }

    const id = 3;

    getEmpleado(id)
        .then(e => getSalario(id)
                    .then(s => console.log(`El salario de ${e} es de ${s}`))
                    .catch(() => console.log(`El salario de ${e} no existe`)))
        .catch(err => console.log(err));
}
*/
{
    const getEmpleado = (id) => {
        return new Promise((resolve, reject) => {
            const empleado = empleados.find(e => e.id === id)?.nombre;
            
            empleado ? resolve(empleado) :
                reject(`No existe el empleado ${id}`);
        });
    }

    const getSalario = (id) => {
        return new Promise((resolve, reject) => {
            const salario = salarios.find(s => s.id === id)?.salario;

            salario ? resolve(salario) : reject (`El salario ${id} no existe`);
        });
    }

    const id = 3;
    let nombre;
    
    getEmpleado(id)
        .then(empleado => {
            nombre = empleado;
            return getSalario(id)
        })
        .then(salario => console.log(`El salario de ${nombre} es de ${salario}`))
        .catch(err => console.log(err));
}