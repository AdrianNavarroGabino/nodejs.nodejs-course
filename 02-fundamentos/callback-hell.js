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

{
    const getEmpleado = (id) => {
        const empleado = empleados.find(e => e.id === id);

        return empleado;
    }

    console.log(getEmpleado(1));
    console.log(getEmpleado(2));
    console.log(getEmpleado(5));
    console.log();
}

{
    const getEmpleado = (id) => {
        const empleado = empleados.find(e => e.id === id);
    
        if(empleado) {
            return empleado;
        }
        else {
            return `El empleado con id ${id} no existe`;
        }
    }
    
    console.log(getEmpleado(1));
    console.log(getEmpleado(2));
    console.log(getEmpleado(5));
    console.log();
}

{
    const getEmpleado = (id, callback) => {
        const empleado = empleados.find(e => e.id === id);
    
        if(empleado) {
            callback(empleado);
        }
        else {
            callback(`El empleado con id ${id} no existe`);
        }
    }
    
    getEmpleado(3, (empleado) => {
        console.log(empleado);
    });

    getEmpleado(10, (empleado) => {
        console.log(empleado);
    });
    console.log();
}

{
    const getEmpleado = (id, callback) => {
        const empleado = empleados.find(e => e.id === id);
    
        if(empleado) {
            callback(null, empleado);
        }
        else {
            callback(`El empleado con id ${id} no existe`);
        }
    }
    
    getEmpleado(3, (err, empleado) => {
        if(err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado existe!');
        console.log(empleado);
    });

    getEmpleado(10, (err, empleado) => {
        if(err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado existe!');
        console.log(empleado);
    });
    console.log();
}

{
    const getSalario = (id, callback) => {
        const salario = salarios.find(salario => salario.id === id)?.salario;

        return salario ? callback(null, salario) :
            callback(`No existe el salario para el id ${id}`);
    }

    const id = 1;

    getSalario(id, (err, salario) => {
        console.log(err ? err : salario);
    });
}

{
    const getEmpleado = (id, callback) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
    
        if(empleado) {
            callback(null, empleado);
        }
        else {
            callback(`El empleado con id ${id} no existe`);
        }
    }

    const getSalario = (id, callback) => {
        const salario = salarios.find(salario => salario.id === id)?.salario;

        return salario ? callback(null, salario) :
            callback(`No existe el salario para el id ${id}`);
    }
    
    const id = 3;

    getEmpleado(id, (err, empleado) => {
        if(err) {
            console.log('ERROR!');
            return console.log(err);
        }

        getSalario(id, (err, salario) => {
            if(err) {
                return console.log(`El empleado ${empleado} no tiene un salario definido`);
            }

            console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
        });
    });
}