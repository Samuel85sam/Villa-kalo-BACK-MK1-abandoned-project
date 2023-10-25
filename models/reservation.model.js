const {Sequelize, DataTypes, ModelStatic } = require('sequelize');


/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const Reservation = sequelize.define('reservation', {
        // L'id se crée automatiquement si non spécifié ici
        dateIN: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateOut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        client: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        occupantQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        avis: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
      
        
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'reservations',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_resservation',
                fields: ['dateIn', 'DateOut','client'],
                unique: false,
            },
        ]
    })
    return Reservation;
}