var express = require('express');
var router = express.Router();
var estudiante = require('../controllers/EstudianteController.js');
router.get('/', estudiante.list);
router.get('/show/:id', estudiante.show);
router.get('/create', estudiante.create);
router.post('/save', estudiante.save);
router.post('/delete/:id', estudiante.delete);

module.exports = router;