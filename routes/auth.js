//Rutas para autnticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
 

//Crea un usuario
//api/auth
router.post('/', 
//Esto se elimina en algun momento porque ya está en otro lado "react"
// [
    
//     check('email', 'Agrega un email válido').isEmail(),
//     check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 })

// ], 

    authController.autenticarUsuario
    
);

// Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;
