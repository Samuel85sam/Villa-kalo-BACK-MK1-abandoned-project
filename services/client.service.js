const clientDto  = require('../dto/client.dto');
const db = require('../models');

const clientService = {

    fetchAll: async () => {
        const client = await db.client.findAll();
        return client.map(char => new clientDTO(client));
    },

    fetchOne: async (id) => {
        const client = await db.client.findOne({
            where: { id } // --> { id: id }
        });

        return new clientDetailDto(client);
    },

    // Exemple de fetch plus détaillé
    // fetchFun: async () => {
    //     const client = await db.Character.findAll({
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
        const client = await db.client.create(data)
        return new clientDetailDto(client)
    },

    delete: async (id) => {
        const nbRowDeleted = await db.client.destroy({
            where: { id } // --> { id: id }
        });

        return nbRowDeleted === 1;
    },

    update: async (id,newData) =>{
        const updatedClient = await db.client.update({updatedClient:newData},{where: {id}});

        return ClientDetailDto(updatedClient)
    },
    
}

module.exports = clientService