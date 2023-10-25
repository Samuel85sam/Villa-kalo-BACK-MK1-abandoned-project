const {avisDto,avisDetailDto}  = require('../DTO/avis.dto');
const db = require('../models');

const avisService = {

    fetchAll: async () => {
        const avis = await db.avis.findAll();
        return avis.map(char => new avisDto(avis));
    },

    fetchOne: async (id) => {
        const avis = await db.avis.findOne({
            where: { id } // --> { id: id }
        });

        return new avisDetailDto(avis);
    },

    // Exemple de fetch plus détaillé
    // fetchFun: async () => {
    //     const avis = await db.Character.findAll({
    //         where: db.Sequelize.or(
    //             {
    //                 firstname: {
    //                     [Op.like]: 'John'
    //                 }
    //             },
    //             {
    //                 firstname: {
    //                     [Op.like]: 'Jacqouille'
    //                 }
    //             }
    //         )
    //     });

    //     return characters.map(char => new CharacterDTO(char))
    // },

    insert: async (data) => {
        const avis = await db.avis.create(data)
        return new avisDetailDto(avis)
    },

    delete: async (id) => {
        const nbRowDeleted = await db.avis.destroy({
            where: { id } // --> { id: id }
        });

        return nbRowDeleted === 1;
    }
}

module.exports = avisService