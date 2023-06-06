require('colors');
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArr
            .forEach(this.imprimirTarea);
    }

    listarPendientesCompletadas(completadas = true) {
        this.listadoArr
            .filter(tarea => !!tarea.completadoEn == completadas)
            .forEach(this.imprimirTarea);
    }

    imprimirTarea(tarea, id) {
        console.log(`${id + 1}. ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}`)
    }
}

module.exports = Tareas;