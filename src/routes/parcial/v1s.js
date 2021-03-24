const express = require('express');
const router = express.Router();

router.get('/vista1', (req, res) => {
    res.render('v1/parcial')
});

module.exports = router;