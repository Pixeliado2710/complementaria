

async function listarEstudiantes(req, res) {
    res.render('estudiantes/estudiante');
}

async function CrearEstudiantes(req, res) {
    res.render('estudiantes/estudiante');
}

async function EliminarEstudiantes(req,res){
    res.render('estudiantes/estudiante');
}

async function ModificarEstudiantes(req,res){
    res.render('estudiantes/estudiante');
}

module.exports = {
    listarEstudiantes,
    CrearEstudiantes,
    EliminarEstudiantes,
    ModificarEstudiantes
}