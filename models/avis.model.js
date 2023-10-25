const {Sequelize, DataTypes, ModelStatic } = require('sequelize');


/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const Avis = sequelize.define('avis', {
        
        // L'id se crée automatiquement si non spécifié ici
        client: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE(undefined),
            allowNull: false,
        },
            
        
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'avis',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_avis',
                fields: ['client', 'comment'],
                unique: false,
            },
        ]
    })
    return Avis;
}