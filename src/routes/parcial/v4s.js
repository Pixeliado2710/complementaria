const express = require('express');
const router = express.Router();

router.get('/vista4', (req, res) => {
    res.render('v4/parcial4')
});

module.exports = router;