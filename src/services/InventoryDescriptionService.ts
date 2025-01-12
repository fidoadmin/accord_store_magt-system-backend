const Sequelize = require('sequelize');
const dbConnect = require('../connect/index');
var moment = require('moment');

export class InventoryDescriptionService {
    
    // async LoadInventoryDescriptions(descriptions:any) {
    //     const query = `SELECT * FROM public.getinventorydescriptions(:varinventorydescriptions)`;
    //     const result = await dbConnect.query(query, {
    //         replacements: { varinventorydescriptions : JSON.stringify(descriptions) },
    //         type: Sequelize.QueryTypes.SELECT
    //     });
    //     return result;
    // };

    async LoadInventoryDescriptions(descriptions:any) {
        const query = `SELECT * FROM accord.getinventorydescriptions(:varinventorydescriptions)`;
        const result = await dbConnect.query(query, {
            replacements: { varinventorydescriptions : JSON.stringify(descriptions) },
            type: Sequelize.QueryTypes.SELECT
        });
        return result;
    };

    async DeleteInventoryDescription(descriptionId) {
        const query = `SELECT * FROM accord.deleteinventorydescription(:varinventorydescriptionguid)`;
        const result = await dbConnect.query(query, {
            replacements: { varinventorydescriptionguid: descriptionId },
            type: Sequelize.QueryTypes.SELECT
        });
        return result.length > 0 ? result[0].result : null;
    };

    async UpdateInventoryDescription(descriptionData:any) {
        const query = `SELECT * FROM accord.upsertinventorydescriptions(:vardescription)`;
        const result = await dbConnect.query(query, {
            replacements: { vardescription :JSON.stringify(descriptionData) },
            type: Sequelize.QueryTypes.SELECT
        });
        return result ;
    };

   
  
}
