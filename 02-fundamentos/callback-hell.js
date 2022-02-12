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
}