const authDto  = require('../DTO/auth.dto');
const db = require('../models');
const jwt = require('jsonwebtoken');


const authService = {

    insert: async (data) => {
        console.log(`db ===========================================================> `,db);
        const auth = await db.auth.create(data)
        return new authDto(auth)
    },

    exist: async (login) => {
        console.log(`login sended ===>${login}`);
        const auth = await db.auth.findOne({
            where: { login }
        });

        return new authDto(auth);
    },
    addJwt: async (jwt, id) => {
        // Vérification de l'existence de l'utilisateur
        const userFound = await db.auth.findOne({
            where: { id }
        });
        // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
        await userFound.update({ jwt })

        return userFound;
    },

    getJwt: async (id) => {
        const jwtExist = await db.auth.findOne({
            where: { id }
        });

        return jwtExist;
    },
    
    verifyJwt: async (token) => {
        const secret = process.env.JWT_SECRET;

        try {
            const decoded = jwt.verify(token, secret);
            return true
        } catch (err) {
            return false
        }
    }
}

module.exports = authService;