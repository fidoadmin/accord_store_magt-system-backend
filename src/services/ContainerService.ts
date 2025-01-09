const Sequelize = require('sequelize');
const dbConnect = require('../connect/index');
const moment = require('moment');
export class ContainerService {
    async LoadContainersDropdown(varparams) {
        const query = `SELECT * FROM accord.getcontainersdropdown(:varjsonparams)`;
        const result = await dbConnect.query(query, {
            replacements: { varjsonparams: JSON.stringify(varparams) },
            type: Sequelize.QueryTypes.SELECT
        });
        return result;
    }

    async LoadContainers(varparams) {
        const query = `SELECT * FROM accord.getcontainers(:varjsonparams)`;
        const result = await dbConnect.query(query, {
            replacements: { varjsonparams: JSON.stringify(varparams) },
            type: Sequelize.QueryTypes.SELECT
        });
        return result;
    }

    async UpsertContainer(containerData) {
        const query = `SELECT * FROM  accord.upsertcontainer(:varjsondata)`;
        const result = await dbConnect.query(query, {
            replacements: { varjsondata: JSON.stringify(containerData) },
            type: Sequelize.QueryTypes.SELECT
        });
        return result;
    }

    async DeleteContainer(guid: string) {
        const query = `SELECT * FROM accord.deletecontainer(:varcontainerguid)`;
        const result = await dbConnect.query(query, {
            replacements: { varcontainerguid: guid },
            type: Sequelize.QueryTypes.SELECT
        });
        return result;
    }

   
}
