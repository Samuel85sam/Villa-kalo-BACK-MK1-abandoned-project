const {Sequelize, DataTypes, ModelStatic } = require('sequelize');

/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const Client = sequelize.define('client', {
        // L'id se crée automatiquement si non spécifié ici
        nom: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        tel: {
            type: DataTypes.INTEGER(16),
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        reservations: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        bankAcount: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
       
        
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'clients',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_client',
                fields: ['tel', 'mail'],
                unique: false,
            },
        ]
    })
    return Client;
}