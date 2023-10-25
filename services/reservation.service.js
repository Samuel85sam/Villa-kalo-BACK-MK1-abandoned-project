const {reservationDto,reservationDetailDto}  = require('../DTO/reservation.dto');
const db = require('../models');

const reservationService = {

    fetchAll: async () => {
        const reservation = await db.reservation.findAll();
        return reservation.map(char => new reservationDto(reservation));
    },

    fetchOne: async (id) => {
        const reservation = await db.reservation.findOne({
            where: { id } // --> { id: id }
        });

        return new reservationDetailDto(reservation);
    },

    // Exemple de fetch plus détaillé
    // fetchFun: async () => {
    //     const reservation = await db.Character.findAll({
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
        const reservation = await db.reservation.create(data)
        return new reservationDetailDto(reservation)
    },

    delete: async (id) => {
        const nbRowDeleted = await db.reservation.destroy({
            where: { id } // --> { id: id }
        });

        return nbRowDeleted === 1;
    },

    update: async (id,newData) =>{
        const updatedReservation = await db.reservation.update({updatedReservation:newData},{where: {id}});

        return reservationDetailDto(updatedReservation)
    },
    
}

module.exports = reservationService