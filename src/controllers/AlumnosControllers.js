async function listarAlumnos(req, res) {
    res.render('v1/alumnos');
}

async function CrearAlumnos(req, res) {

}

module.exports = {
    listarAlumnos,
    CrearAlumnos
}