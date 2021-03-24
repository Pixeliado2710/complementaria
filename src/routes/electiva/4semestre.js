const express = require('express');
const router = express.Router();
const AlumnosControllers = require('../../controllers/AlumnosControllers');
const MateriasControllers = require('../../controllers/MateriasControllers');
const ClasesControllers = require('../../controllers/ClasesControllers');
const EstudiantesControllers = require('../../controllers/EstudiantesControllers')



router.get('/alumnos', (req, res) => {
    res.render('v1/alumnos');

});

router.get('/alumnos', (req, res) => {
    res.render('v1/alumnos');

});

router.get('/listarAlumnos', AlumnosControllers.listarAlumnos);
router.get('/CrearAlmnos', AlumnosControllers.CrearAlumnos);
//materias
router.get('/mostrarm', MateriasControllers.listarMaterias);
router.get('/crearm', MateriasControllers.CrearMaterias);
router.get('/eliminarm', MateriasControllers.EliminarMaterias);
router.get('/modificarm', MateriasControllers.ModificarMaterias)
//Estuidantes
router.get('/mostrare', EstudiantesControllers.listarEstudiantes);
router.get('/creare', EstudiantesControllers.CrearEstudiantes);
router.get('/eliminare', EstudiantesControllers.EliminarEstudiantes);
router.get('/modificare', EstudiantesControllers.ModificarEstudiantes)
//Clases
router.get('/mostarc', ClasesControllers.listarClases);
router.get('/crearc', ClasesControllers.CrearClases);
router.get('/eliminarc', ClasesControllers.EliminarClases);
router.get('/modificarc',ClasesControllers.ModificarClases);
module.exports = router;