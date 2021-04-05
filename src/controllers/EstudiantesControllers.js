const EstudiantesModels = require('../models/EstudiantesModel');

async function listarEstudiantes(req, res) {
    const listarestu = await EstudiantesModels().listall();
    console.log(listarestu)
        //res.status(200).json(listarestu)
    res.render('estudiantes/estudiante', { listarestu });
}
async function listarEstudiantesApi(req, res) {
    const listarestu = await EstudiantesModels().listall();
    console.log(listarestu)
    res.status(200).json(listarestu)

}

async function crearEstudiantes(req, res) {
    //console.log(req.body)
    const pepito = req.body;
    await EstudiantesModels().crearEstudiante(pepito);
    res.redirect('/estudiantes/mostrare');
}
async function crearEstudiantesApi(req, res) {
    //console.log(req.body)
    const pepito = req.body;
    await EstudiantesModels().crearEstudiante(pepito);
    // res.redirect('/estudiantes/mostrare');
    res.status(200).json({
        sucess: 1,
        msg: 'registro completado'
    })
}


async function EliminarEstudiantes(req, res) {
    const crespita = req.params.id;
    await EstudiantesModels().eliminarEstudiantes(crespita);
    res.redirect('/estudiantes/mostrare');
}

async function modificaEstudiantes(req, res) {
    const data = [
        req.body.nombre_estu,
        req.body.edad,
        req.body.correo,
        req.body.grado,
        req.params.id
    ]

    await EstudiantesModels().modificarEstudiantes(data)
    res.redirect('/estudiantes/mostrare');

}


module.exports = {
    listarEstudiantes,
    listarEstudiantesApi,
    crearEstudiantes,
    crearEstudiantesApi,
    EliminarEstudiantes,
    modificaEstudiantes
}