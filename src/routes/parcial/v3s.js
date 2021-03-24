const express = require('express');
const router = express.Router();

router.get('/vista3', (req, res) => {
    res.render('v3/parcial3')
});

module.exports = router;