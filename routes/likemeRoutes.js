const express = require('express');
const { obtenerTodosLosPosts , crearPost , modificarPost , eliminarPost } = require('../controllers/likemeControllers');
const router = express.Router();

router.get('/posts', obtenerTodosLosPosts);
router.put('/posts/:id', modificarPost);
router.delete('/posts/:id' , eliminarPost);
router.post('/posts', crearPost);

module.exports = router;