import { ContainerService } from "../services/ContainerService"
import { Logger } from "./../logger/logger";
import { ContainerMapper } from "../mapper/ContainerMapper";
import { CommonService } from './../common/common';
import { ErrorMessageModel } from '../models/ErrorMessages';

const commonService = new CommonService();

export class ContainerController {
   
    async GetContainers(req, res) {
        try {
            const page = req.query.Page ? req.query.Page : 1;
            const categoryId = req.query.CategoryId?req.query.CategoryId:null;
            const type = req.query.Type?req.query.Type:null;
            const limit = req.query.Limit ? req.query.Limit : 10;
            const pageOffSet = (page - 1) * limit;
            const pageLimit = limit;
            const varparams = {
                pageoffset: pageOffSet,
                pagelimit: pageLimit,
                categoryguid:categoryId,
                search: req.query.Search ? req.query.Search : '',
                sortby: req.query.SortBy ? req.query.SortBy : 'name',
                sortorder: req.query.SortOrder ? req.query.SortOrder : 'ASC',
                type:type
            };

            const containerService = new ContainerService();
            const results = await containerService.LoadContainers(varparams);
            res.header("X-Page-TotalCount", results.length > 0 ? results[0].total : 0);

            const containerMapper = new ContainerMapper();
            const mappedContainers = containerMapper.ModelToDto(results);

            res.status(200).json(mappedContainers);

        } catch (err) {
            new Logger().Error('GetContainers', err.toString(),  req.userId,req.clientId);
            const result = await commonService.GetModelData(ErrorMessageModel, { statuscode: 500 });
            res.status(500).json({error: result.errormessage});
        }
    };

    async UpsertContainer(req, res) {
        try {
            const containerData = req.body;

            const containerMapper = new ContainerMapper();
            const mappedContainer = containerMapper.DtoToModel(containerData,req);

            const containerService = new ContainerService();
            const result = await containerService.UpsertContainer(mappedContainer);

            res.status(200).json({id:result[0].result});

        } catch (err) {
            new Logger().Error('UpsertContainer', err.toString(),  req.userId,req.clientId);
            const result = await commonService.GetModelData(ErrorMessageModel, { statuscode: 500 });
            res.status(500).json({error: result.errormessage});
        }
    };

    async DeleteContainer(req, res) {
        try {
            const containerId = req.params.Id;

            const isGuid: boolean = await commonService.isUUID(containerId);
            if (!isGuid) {
                const result = await commonService.GetModelData(ErrorMessageModel, { statuscode: 422 });
                res.status(500).json({error: result.errormessage});
            };

            const containerService = new ContainerService();
            let result = await containerService.DeleteContainer(containerId);
            if ( result[0].result == true){
                res.status(200).json();
            }else{
                res.status(404).json();
            }

            res.status(200).json();

        } catch (err) {
            new Logger().Error('DeleteContainer', err.toString(),  req.userId,req.clientId);
            const result = await commonService.GetModelData(ErrorMessageModel, { statuscode: 500 });
            res.status(500).json({error: result.errormessage});
        }
    };

    
    async GetContainersDropdown(req, res) {
        try {
            const page = req.query.Page ? req.query.Page : 1;
            const categoryId = req.query.CategoryId?req.query.CategoryId:null;
            const limit = req.query.Limit ? req.query.Limit : 10;
            const pageOffSet = (page - 1) * limit;
            const pageLimit = limit;
            const varparams = {
                pageoffset: pageOffSet,
                pagelimit: pageLimit,
                categoryguid:categoryId,
                search: req.query.Search ? req.query.Search : '',
                sortby: req.query.SortBy ? req.query.SortBy : 'name',
                sortorder: req.query.SortOrder ? req.query.SortOrder : 'DESC'
            };

            const containerService = new ContainerService();
            const results = await containerService.LoadContainersDropdown(varparams);
          

            const containerMapper = new ContainerMapper();
            const mappedContainers = containerMapper.ModelToDto(results);

            res.status(200).json(mappedContainers);

        } catch (err) {
            new Logger().Error('GetContainersDropdown', err.toString(),  req.userId,req.clientId);
            const result = await commonService.GetModelData(ErrorMessageModel, { statuscode: 500 });
            res.status(500).json({error: result.errormessage});
        }
    };
}
