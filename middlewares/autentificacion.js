const jwt = require('jsonwebtoken');

//Verificar token

let verificarToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next();
    })
};

//Verificar ADMINROLE

let verificarAdminRole = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {
        res.json({
            ok: false,
            err: {
                message: 'El usaurio no es Administrador'
            }
        })
    }


}

module.exports = {
    verificarToken,
    verificarAdminRole
}