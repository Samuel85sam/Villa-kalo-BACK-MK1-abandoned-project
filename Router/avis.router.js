
const avisController = require('../controllers/avis.controller');
const avisRouter = require('express').Router();

avisRouter.route('/add')
.post(avisController.addAvis)
.all((res,req)=> {
    res.statusCode(405).send('AVIS NON-VALIDE')
});


avisRouter.route('/delete')
.delete(avisController.addAvis)
.all((res,req)=> {
    res.statusCode(405).send('AVIS NON-VALIDE')
});




module.exports = avisRouter;