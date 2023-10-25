const authController = require('../controllers/auth.controller');
const authRouter = require('express').Router();

authRouter.route('/login')
.post(authController.login)
.all((res,req) => {
    res.statusCode(405).send('Login Unavalable')
});

authRouter.route('/register')
.post(authController.register)
.all((res,req)=> {
    res.statusCode(405).send('Unavailable')
});

module.exports = authRouter;