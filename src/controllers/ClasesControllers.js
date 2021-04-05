const clasesModels = require('../models/ClasesModels');

async function listarClases(req, res) {
    res.render('clases/clase');
}

async function CrearClases(req, res) {
    res.render('clases/clase');
}

async function EliminarClases(req, res) {
    res.render('clases/clase');
}
async function ModificarClases(req, res) {
    res.render('clases/clase');
}

module.exports = {
    listarClases,
    CrearClases,
    EliminarClases,
    ModificarClases
}