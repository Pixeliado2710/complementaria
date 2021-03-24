const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/administrador', (req, res) => {
    res.render('administradors/home');
});
module.exports = router;