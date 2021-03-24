const express = require('express');
const router = express.Router();

router.get('/vista2', (req, res) => {
    res.render('v2/parcial2')
});

module.exports = router;