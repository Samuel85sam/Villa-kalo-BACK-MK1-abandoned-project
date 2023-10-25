const yup = require('yup');
const { object } = require('yup');

const avisValidator = object({
    client: yup.string().min(1).max(50).required(),
    prenom: yup.string().min(1).max(50).required(),
    note: yup.number().min(1).max(1).required(),
    comment: yup.string().min(0).max(500),
    date: yup.date()
})

module.exports = avisValidator;