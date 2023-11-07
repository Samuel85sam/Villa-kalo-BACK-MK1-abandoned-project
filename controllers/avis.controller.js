const avisValidator = require('../validators/avis.validator')
const avisService = require('../services/avis.service');
//const { diskStorage } = require('multer');

const avisController = {
    addAvis: async (req, res) => {
        // Récupération du formulaire
        const avisData = req.body;
        console.log("avisData = ↓↓↓");
        console.log(req.body);
        // Validation les informations récupérées depuis le formulaire
        const validatedData = await avisValidator.validate(avisData);
        // Destructuring des données vérifées
        const { client, prenom, note, comment, date } = validatedData;
             // Envoi des données validées et hashées à la DB
        const avisInserted = await authService.insert({ client, prenom, note, comment, date });
        if (avisInserted) {
            res
                // On informe que l'insertion des données s'est correctement déroulée, et que l'avis est crée
                .status(201)
                // On redirige les informations utilisateur sur la route homepage (ne pas oublier de gérer la redirection dans le front)
                .location(`api/auth/login`)//! ← ??
                .json(avisInserted);
            console.log(`client ==>  ${client}`);
            console.log(`prenom ==>  ${prenom}`);
            console.log(`note ==>  ${note}`);
            console.log(`comment ==>  ${comment}`);
            console.log(`date ==>  ${date}`);
            console.log(`==> insertion ok, compte crée`);
        }
    },

    getAll: async (req, res) => {
        let allAvis = await avisService.fetchAll()    
    },

    getOne: async (req, res) => {
        let avisId = req.body
        //! comment recupèrer l'id au passage de la souris??
        let OneAvis = await avisService.fetchOne()   
    },



}
module.exports = avisController;