const yup = require('yup');
const { object } = require('yup');

const clientValidator = object({
    nom: yup.string().min(1).max(50).required(),
    prenom: yup.string().min(1).max(50).required(),
    tel: yup.number().min(10).max(16).required(),
    reservation: yup.number().min(0).max(10),
    bankAcount: yup.number().min(16).max(16),
})

module.exports = clientValidator;