const yup = require('yup');
const { object } = require('yup');

const reservationValidator = object({
    dateIn: yup.date(),
    dateOut: yup.date(),
    client: yup.string().min(1).max(50).required(),
    accupantQty: yup.number().min(1).max(15).required(),
    avis: yup.string().min(0).max(500),
})

module.exports = reservationValidator;