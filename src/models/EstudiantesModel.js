const pool = require('../database');
module.exports = function() {
    async function listall() {
        let query = "select * from estudiantes";
        return await pool.query(query);
    }

    async function crearEstudiante(data) {
        let query = "insert into estudiantes set ?";
        return await pool.query(query, data);
    }
    async function eliminarEstudiantes(crespitas) {
        let sql = "delete from estudiantes where id_estudiantes = ?"
        return await pool.query(sql, crespitas);

    }
    async function modificarEstudiantes(fenomenal) {
        let blanca = `update estudiantes set nombre_estu=?,
                                                edad=?,
                                                correo=?,
                                                grado=?
                                where id_estudiantes =?`
        return await pool.query(blanca, fenomenal);

    }
    return {
        listall,
        crearEstudiante,
        eliminarEstudiantes,
        modificarEstudiantes
    }
}