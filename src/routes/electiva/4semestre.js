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

//rutas de las api estudiantes
router.get('/api/mostrare', EstudiantesControllers.listarEstudiantesApi);
router.post('/api/creare', EstudiantesControllers.crearEstudiantesApi);
//rutas de las api materias 
//rutas de las api clases

//materias
router.get('/mostrarm', MateriasControllers.listarMaterias);
router.get('/crearm', MateriasControllers.CrearMaterias);
router.get('/eliminarm', MateriasControllers.EliminarMaterias);
router.get('/modificarm', MateriasControllers.ModificarMaterias)
    //Estuidantes
router.get('/mostrare', EstudiantesControllers.listarEstudiantes);
router.post('/creare', EstudiantesControllers.crearEstudiantes);
router.get('/eliminare/:id', EstudiantesControllers.EliminarEstudiantes);
router.post('/modificare/:id', EstudiantesControllers.modificaEstudiantes)
    //Clases
router.get('/mostarc', ClasesControllers.listarClases);
router.get('/crearc', ClasesControllers.CrearClases);
router.get('/eliminarc', ClasesControllers.EliminarClases);
router.get('/modificarc', ClasesControllers.ModificarClases);
module.exports = router;